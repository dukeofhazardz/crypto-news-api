import { scrapper } from "./scrapper.js"

const uTodayBitcoin = async () => {
  return await scrapper("https://u.today/bitcoin-news", '.category-item__info', '.category-item__title')
}

export { uTodayBitcoin }