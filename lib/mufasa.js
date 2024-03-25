import { redisClient } from "../utils/redis.js";
import { scrapper } from "../utils/scrapper.js"

const cryptoMufasaBitcoin = async () => {
  const cache = await redisClient.get('cryptoMufasaBitcoin');
  if (cache === null) {
    const data = await scrapper("https://cryptomufasa.com/category/bitcoin-news", '.jeg_post_title', 'a')
    await redisClient.set('cryptoMufasaBitcoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const cryptoMufasaEthereum = async () => {
  const cache = await redisClient.get('cryptoMufasaEthereum');
  if (cache === null) {
    const data = await scrapper("https://cryptomufasa.com/category/ethereum-news", '.jeg_post_title', 'a')
    await redisClient.set('cryptoMufasaEthereum', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}


export { cryptoMufasaBitcoin, cryptoMufasaEthereum }
