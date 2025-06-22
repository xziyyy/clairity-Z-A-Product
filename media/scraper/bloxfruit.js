// cjs
// get stock normal
// get stock mirage
// https://gist.github.com/xziyyy/36a54086a996ff19779e6415aa6a45f0

/// AssetsBox/scraper/getBloxFruitStock.js

const axios = require('axios');
const cheerio = require('cheerio');

const URL = 'https://fruityblox.com/stock';

const getBloxFruitStock = async () => {
  try {
    const { data: html } = await axios.get(URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10)'
      }
    });

    const $ = cheerio.load(html);
    const allStock = [];

    $('.p-4.border').each((_, el) => {
      const $el = $(el);
      const name = $el.find('h3.font-medium').text().trim();
      const stockType = $el.find('span.text-xs').text().trim();
      const priceSpans = $el.find('span.text-sm');
      const priceMoney = $(priceSpans[0]).text().replace('$', '').trim();
      const priceRobux = $(priceSpans[1]).text().replace('R', '').trim();
      allStock.push({ name, stockType, priceMoney, priceRobux });
    });

    const normalStock = allStock.filter(fruit => fruit.stockType.includes('Normal'));
    const mirageStock = allStock.filter(fruit => fruit.stockType.includes('Mirage'));

    const updateTextElements = $('div.bg-white\\/10 p.text-sm');

    // Pastikan elemen ada sebelum akses
    const normalUpdatedAt = updateTextElements.eq(0).text().includes('UPDATE:')
      ? updateTextElements.eq(0).text().replace('UPDATE:', '').trim()
      : 'Unknown';

    const mirageUpdatedAt = updateTextElements.eq(1).text().includes('UPDATE:')
      ? updateTextElements.eq(1).text().replace('UPDATE:', '').trim()
      : 'Unknown';

    return {
      author: 'xZiyy',
      normal: {
        updatedAt: normalUpdatedAt,
        stock: normalStock
      },
      mirage: {
        updatedAt: mirageUpdatedAt,
        stock: mirageStock
      },
      all: {
        updatedAt: new Date().toLocaleString(),
        stock: allStock
      }
    };
  } catch (err) {
    throw new Error(`Gagal ambil data: ${err.message}`);
  }
};

module.exports = getBloxFruitStock;