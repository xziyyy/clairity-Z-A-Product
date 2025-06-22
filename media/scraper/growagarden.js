// cjs
// get stock
// get stock special
// get weather
// https://gist.github.com/xziyyy/06143cfb82de5e07cb1be75aea39af74

const axios = require("axios");

async function fetchGrowAGardenStock(mode = 'all') {
  try {
    const requests = {
      stock: axios.get("https://growagardenstock.com/api/stock"),
      special: axios.get("https://growagardenstock.com/api/special-stock"),
      weather: axios.get("https://growagardenstock.com/api/stock/weather"),
    };

    const formatTime = (dateStr) => new Date(dateStr).toLocaleString();

    if (mode === 'stock') {
      const { data } = await requests.stock;
      return {
        author: "xZiyy",
        stockUpdatedAt: formatTime(data.updatedAt),
        gearStock: data.gear,
        seedsStock: data.seeds,
        eggStock: data.egg
      };
    }

    if (mode === 'special') {
      const { data } = await requests.special;
      return {
        author: "xZiyy",
        specialUpdatedAt: formatTime(data.updatedAt),
        cosmeticsStock: data.cosmetics,
        honeyStock: data.honey
      };
    }

    if (mode === 'weather') {
      const { data } = await requests.weather;
      return {
        author: "xZiyy",
        weatherUpdatedAt: formatTime(data.updatedAt),
        weather: {
          type: data.weatherType,
          description: data.description,
          rarity: data.rarity,
          cropBonuses: data.cropBonuses,
          mutations: data.mutations,
          effectDescription: data.effectDescription
        }
      };
    }

    // Kalau mode all
    const [stockRes, specialRes, weatherRes] = await Promise.all([
      requests.stock, requests.special, requests.weather
    ]);

    return {
      author: "xZiyy",
      stockUpdatedAt: formatTime(stockRes.data.updatedAt),
      gearStock: stockRes.data.gear,
      seedsStock: stockRes.data.seeds,
      eggStock: stockRes.data.egg,
      specialUpdatedAt: formatTime(specialRes.data.updatedAt),
      cosmeticsStock: specialRes.data.cosmetics,
      honeyStock: specialRes.data.honey,
      weatherUpdatedAt: formatTime(weatherRes.data.updatedAt),
      weather: {
        type: weatherRes.data.weatherType,
        description: weatherRes.data.description,
        rarity: weatherRes.data.rarity,
        cropBonuses: weatherRes.data.cropBonuses,
        mutations: weatherRes.data.mutations,
        effectDescription: weatherRes.data.effectDescription
      }
    };

  } catch (err) {
    throw new Error("Gagal mengambil data: " + err.message);
  }
}

module.exports = fetchGrowAGardenStock;