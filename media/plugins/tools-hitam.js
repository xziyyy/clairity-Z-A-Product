/*
credits script by @xZiyy
script ini free 100%
https://whatsapp.com/channel/0029VbAUashAu3aYDTjzqq0v
https://youtube.com/@xziyy?si=ykmNPTiBGBrNzA-E
*/

require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');
const { uploadCatbox } = require("../../library/uploader");

module.exports = {
    command: ['hitamkan'],
    exec: async (m, from, { q, fuzzy, args, command, prefix, reply, mime, qmsg }) => {
        if (!qmsg || !/image/.test(mime)) return reply(`Kirim gambar dengan caption *${prefix}hitamkan* atau reply gambarnya!`);
        
        reply('_Tunggu sebentar, sedang memproses gambar..._');

        try {
            const media = await fuzzy.downloadAndSaveMediaMessage(qmsg);
            const urla = await uploadCatbox(media);

            const res = await axios.get(`https://clairity.dpdns.org/api/hitamkan?url=${encodeURIComponent(urla)}&filter=hitam`, {
                responseType: 'arraybuffer'
            });

            await fuzzy.sendMessage(m.chat, {
                image: Buffer.from(res.data),
                caption: 'Berhasil dihitamkan!'
            }, { quoted: m });

            fs.unlinkSync(media);
        } catch (e) {
            console.error(e);
            reply('Terjadi kesalahan saat memproses gambar.');
        }
    }
};

const file = __filename;
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`[  UPDATE ] ${file}`);
  delete require.cache[require.resolve(file)];
  require(file);
});