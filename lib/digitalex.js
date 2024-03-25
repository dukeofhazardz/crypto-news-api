import { redisClient } from "../utils/redis.js";
import { scrapper } from "../utils/scrapper.js"

const digitalBitcoin = async () => {
  const cache = await redisClient.get('digitalBitcoin');
  if (cache === null) {
    const data = await scrapper("https://digitalexchangexpress.com/category/crypto-currency/bitcoin", '.entry-title', 'a')
    await redisClient.set('digitalBitcoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const digitalEthereum = async () => {
  const cache = await redisClient.get('digitalEthereum');
  if (cache === null) {
    const data = await scrapper("https://digitalexchangexpress.com/category/crypto-currency/ethereum", '.entry-title', 'a')
    await redisClient.set('digitalEthereum', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}

const digitalDogecoin = async () => {
    const cache = await redisClient.get('digitalDogecoin');
    if (cache === null) {
      const data = await scrapper("https://digitalexchangexpress.com/category/crypto-currency/doge", '.entry-title', 'a')
      await redisClient.set('digitalDogecoin', JSON.stringify(data), 18000);
      return data;
    } else {
      return JSON.parse(cache);
    }
  }


export { digitalBitcoin, digitalEthereum, digitalDogecoin }
