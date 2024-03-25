import { scrapper } from "./scrapper.js"

const uTodayBitcoin = async () => {
  return await scrapper("https://u.today/bitcoin-news", '.category-item__info', '.category-item__title')
}

const uTodayEthereum = async () => {
  return await scrapper("https://u.today/ethereum-news", '.category-item__info', '.category-item__title')
}

const uTodayCardano = async () => {
  return await scrapper("https://u.today/cardano-ada-coin-news", '.category-item__info', '.category-item__title')
}

export { uTodayBitcoin, uTodayEthereum, uTodayCardano }
