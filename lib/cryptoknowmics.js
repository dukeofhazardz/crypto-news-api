import { redisClient } from "../utils/redis.js";
import { scrapper } from "../utils/scrapper.js"

const cryptoKnowBitcoin = async () => {
  const cache = await redisClient.get('cryptoKnowBitcoin');
  if (cache === null) {
    const data = await scrapper("https://www.cryptoknowmics.com/news/bitcoin", 'h3', 'a')
    await redisClient.set('cryptoKnowBitcoin', JSON.stringify(data), 18000);
    return data;
  } else {
    return JSON.parse(cache);
  }
}


export { cryptoKnowBitcoin }
