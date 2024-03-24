import express from "express";
import { uTodayBitcoin } from "../lib/u.today.js";
import { newsBTC } from "../lib/newsbtc.js";

const PORT = 5000;

const app = express()

const site = {
  bitcoin: [
    'https://u.today/bitcoin-news',
    'https://www.newsbtc.com/news/bitcoin/',
    'https://www.reddit.com/r/Bitcoin/',
    'https://cryptomufasa.com/category/bitcoin-news/',
    'https://digitalexchangexpress.com/category/crypto-currency/bitcoin/',
    'https://www.kryptomoney.com/tag/bitcoin-news/',
    'https://www.cryptoknowmics.com/news/bitcoin',
  ],
  etherium: [

  ],
  altcoin: [

  ],

}

app.get('/', async (req, res) => {
  const allArticles = []
  allArticles.push({"u.today": await uTodayBitcoin()})
  allArticles.push({"newsBTC": await newsBTC()})
  return res.json(allArticles)
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error listening on Port ${PORT}`);
  }
  console.log(`Server running on Port ${PORT}`);
})