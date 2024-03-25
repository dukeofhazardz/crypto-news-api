import { scrapper } from "./utils/scrapper.js"

console.log(await scrapper("https://www.kryptomoney.com/tag/bitcoin-news", 'newsGridInfo', 'a'))