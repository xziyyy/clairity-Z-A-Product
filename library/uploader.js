const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
const { exec } = require('child_process');
const util = require('util');

const execAsync = util.promisify(exec);

async function uploadCatbox(filePath) {
  try {
    const { stdout } = await execAsync(`curl -F "reqtype=fileupload" -F "userhash=" -F "fileToUpload=@${filePath}" https://catbox.moe/user/api.php`);
    return stdout.trim();
  } catch (error) {
    throw error;
  }
}

async function TelegraPh(buffer) {
	return new Promise (async (resolve, reject) => {
		try {
			const form = new FormData();
			const input = Buffer.from(buffer);
			const { ext } = await fromBuffer(buffer);
			form.append('file', input, { filename: 'data.' + ext });
			const data = await axios.post('https://telegra.ph/upload', form, {
				headers: {
					...form.getHeaders()
				}
			})
			resolve('https://telegra.ph' + data.data[0].src)
		} catch (e) {
			reject(e)
		}
	})
}

async function UguuSe(buffer) {
	return new Promise (async (resolve, reject) => {
		try {
			const form = new FormData();
			const input = Buffer.from(buffer);
			const { ext } = await fromBuffer(buffer);
			form.append('files[]', input, { filename: 'data.' + ext });
			const data = await axios.post('https://uguu.se/upload.php', form, {
				headers: {
					...form.getHeaders()
				}
			})
			resolve(data.data.files[0])
		} catch (e) {
			reject(e)
		}
	})
}

async function webp2mp4File(path) {
	return new Promise((resolve, reject) => {
		const form = new FormData();
		 form.append('new-image-url', '')
		 form.append('new-image', fs.createReadStream(path))
		 axios({
			  method: 'post',
			  url: 'https://s6.ezgif.com/webp-to-mp4',
			  data: form,
			  headers: {
				   'Content-Type': `multipart/form-data; boundary=${form._boundary}`
			  }
		 }).then(({ data }) => {
			  const FormDataThen = new FormData()
			  const $ = cheerio.load(data)
			  const file = $('input[name="file"]').attr('value')
			  FormDataThen.append('file', file)
			  FormDataThen.append('convert', "Convert WebP to MP4!")
			  axios({
				   method: 'post',
				   url: 'https://ezgif.com/webp-to-mp4/' + file,
				   data: FormDataThen,
				   headers: {
						'Content-Type': `multipart/form-data; boundary=${FormDataThen._boundary}`
				   }
			  }).then(({ data }) => {
				   const $ = cheerio.load(data)
				   const result = 'https:' + $('div#output > p.outfile > video > source').attr('src')
				   resolve({
						status: true,
						message: "Created By MRHRTZ",
						result: result
				   })
			  }).catch(reject)
		 }).catch(reject)
	})
}

module.exports = { uploadCatbox, TelegraPh, UguuSe, webp2mp4File }
