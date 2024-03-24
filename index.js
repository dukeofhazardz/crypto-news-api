import express from "express";
import { uTodayBitcoin } from "./lib/u.today.js";

const PORT = 5000;

const app = express()
const allArticles = []

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
  allArticles.push({"u.today": await uTodayBitcoin()})
  return res.json(allArticles)
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error listening on Port ${PORT}`);
  }
  console.log(`Server running on Port ${PORT}`);
})