import { redisClient } from "../utils/redis.js";
import { scrapper } from "../utils/scrapper.js"

const uTodayBitcoin = async () => {
  const cache = await redisClient.get('uTodayBitcoin');
  if (cache === null) {
    const data = await scrapper("https://u.today/bitcoin-news", '.category-item__info', '.category-item__title')
    await redisClient.set('uTodayBitcoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const uTodayEthereum = async () => {
  const cache = await redisClient.get('uTodayEthereum');
  if (cache === null) {
    const data = await scrapper("https://u.today/ethereum-news", '.category-item__info', '.category-item__title')
    await redisClient.set('uTodayEthereum', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const uTodayCardano = async () => {
  const cache = await redisClient.get('uTodayCardano');
  if (cache === null) {
    const data = await scrapper("https://u.today/cardano-ada-coin-news", '.category-item__info', '.category-item__title')
    await redisClient.set('uTodayCardano', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const uTodayDogecoin= async () => {
  const cache = await redisClient.get('uTodayDogecoin');
  if (cache === null) {
    const data = await scrapper("https://u.today/dogecoin-doge-coin-news-today", '.category-item__info', '.category-item__title')
    await redisClient.set('uTodayDogecoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const uTodayNFT= async () => {
  const cache = await redisClient.get('uTodayNFT');
  if (cache === null) {
    const data = await scrapper("https://u.today/nft-news", '.category-item__info', '.category-item__title')
    await redisClient.set('uTodayNFT', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

export { uTodayBitcoin, uTodayEthereum, uTodayCardano, uTodayDogecoin, uTodayNFT }
