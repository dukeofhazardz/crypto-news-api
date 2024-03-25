import express from "express";
import { uTodayBitcoin, uTodayCardano, uTodayEthereum } from "../lib/u.today.js";
import { newsBTCBitcoin, newsBTCEthereum, newsBTCCardano } from "../lib/newsbtc.js";
import { cryptoMufasaBitcoin, cryptoMufasaEthereum } from "../lib/mufasa.js";

const PORT = 5000;

const app = express()

const site = {
  bitcoin: [
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
  allArticles.push({ "u.today": {
    bitcoin: await uTodayBitcoin(), 
    ethereum: await uTodayEthereum(),
    cardano: await uTodayCardano()
  }});

  allArticles.push({ "newsBTC": {
    bitcoin: await newsBTCBitcoin(),
    ethereum: await newsBTCEthereum(),
    cardano: await newsBTCCardano()
  }});
  return res.json(allArticles)
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error listening on Port ${PORT}`);
  }
  console.log(`Server running on Port ${PORT}`);
})
