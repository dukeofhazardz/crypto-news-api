import { scrapper } from "./scrapper.js"

const newsBTCBitcoin = async () => {
  return await scrapper("https://www.newsbtc.com/news/bitcoin", '.jeg_post_title', 'a')
}

const newsBTCEthereum = async () => {
  return await scrapper("https://www.newsbtc.com/news/ethereum", '.jeg_post_title', 'a')
}

const newsBTCCardano = async () => {
  return await scrapper("https://www.newsbtc.com/news/cardano", '.jeg_post_title', 'a')
}

export { newsBTCBitcoin, newsBTCEthereum, newsBTCCardano }
