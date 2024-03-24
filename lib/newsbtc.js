import { scrapper } from "./scrapper.js"

const newsBTC = async () => {
  return await scrapper("https://www.newsbtc.com/news/bitcoin", '.jeg_post_title', 'a')
}

export { newsBTC }