import { redisClient } from "../utils/redis.js";
import { scrapper } from "../utils/scrapper.js"

const newsBTCBitcoin = async () => {
  const cache = await redisClient.get('newsBTCBitcoin');
  if (cache === null) {
    const data = await scrapper("https://www.newsbtc.com/news/bitcoin", '.jeg_post_title', 'a')
    await redisClient.set('newsBTCBitcoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const newsBTCEthereum = async () => {
  const cache = await redisClient.get('newsBTCEthereum');
  if (cache === null) {
    const data = await scrapper("https://www.newsbtc.com/news/ethereum", '.jeg_post_title', 'a')
    await redisClient.set('newsBTCEthereum', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const newsBTCCardano = async () => {
  const cache = await redisClient.get('newsBTCCardano');
  if (cache === null) {
    const data = await scrapper("https://www.newsbtc.com/news/cardano", '.jeg_post_title', 'a')
    await redisClient.set('newsBTCCardano', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const newsBTCDogecoin = async () => {
  const cache = await redisClient.get('newsBTCDogecoin');
  if (cache === null) {
    const data = await scrapper("https://www.newsbtc.com/news/dogecoin", '.jeg_post_title', 'a')
    await redisClient.set('newsBTCDogecoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const newsBTCNFT = async () => {
  const cache = await redisClient.get('newsBTCNFT');
  if (cache === null) {
    const data = await scrapper("https://www.newsbtc.com/nft", '.jeg_post_title', 'a')
    await redisClient.set('newsBTCNFT', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

export { newsBTCBitcoin, newsBTCEthereum, newsBTCCardano, newsBTCDogecoin, newsBTCNFT }
