const axios = require('axios').default
const cheerio = require('cheerio')
const express = require('express')
const PORT = 5000;

const app = express();

const articles = []

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
app.get('/', (req, res) => {
  return res.json('Welcome to Crypto News API');
});

app.get('/news', (req, res) => {
  axios.get('https://u.today/bitcoin-news')
  .then((response) => {
    const html = response.data;
    const $ = cheerio.load(html);
    console.log($('a').text())
    $('a:contains("bitcoin")', html).each(() => {
      const title = $(this).text;
      const url = $(this).attr('href');
      articles.push({
        title,
        url,
      });
    })
    console.log(articles)
    return res.json(articles)
  })
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Error listening on Port ${PORT}`);
  }
  console.log(`Server running on Port ${PORT}`);
})