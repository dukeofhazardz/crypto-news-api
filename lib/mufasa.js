import { scrapper } from "./scrapper.js"

const cryptoMufasaBitcoin = async () => {
  return await scrapper("https://cryptomufasa.com/category/bitcoin-news", '.jeg_post_title', 'a')
}

const cryptoMufasaEthereum = async () => {
  return await scrapper("https://cryptomufasa.com/category/ethereum-news", '.jeg_post_title', 'a')
}


export { cryptoMufasaBitcoin, cryptoMufasaEthereum }
