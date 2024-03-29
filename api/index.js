import express from "express";
import { redisClient } from "../utils/redis.js";
import { uTodayBitcoin, uTodayCardano, uTodayEthereum, uTodayDogecoin, uTodayNFT } from "../lib/u.today.js";
import { newsBTCBitcoin, newsBTCEthereum, newsBTCCardano, newsBTCDogecoin, newsBTCNFT } from "../lib/newsbtc.js";
import { cryptoMufasaBitcoin, cryptoMufasaEthereum } from "../lib/mufasa.js";
import { digitalBitcoin, digitalEthereum, digitalDogecoin } from "../lib/digitalex.js";
import { cryptoKnowBitcoin } from "../lib/cryptoknowmics.js";

const PORT = 5000;
const app = express()

app.get('/', async (req, res) => {
  const allArticles = []
  allArticles.push({ "bitcoin": [
    ...(await uTodayBitcoin()), 
    ...(await newsBTCBitcoin()),
    ...(await cryptoMufasaBitcoin()),
    ...(await digitalBitcoin()),
    ...(await cryptoKnowBitcoin())
  ]});

  allArticles.push({ "ethereum": [
    ...(await uTodayEthereum()),
    ...(await newsBTCEthereum()),
    ...(await cryptoMufasaEthereum()),
    ...(await digitalEthereum()),
  ]});

  allArticles.push({ "cardano": [
    ...(await uTodayCardano()),
    ...(await newsBTCCardano())
  ]});

  allArticles.push({ "dogecoin": [
    ...(await uTodayDogecoin()),
    ...(await newsBTCDogecoin()),
    ...(await digitalDogecoin())
  ]});

  allArticles.push({ "nft": [
    ...(await uTodayNFT()),
    ...(await newsBTCNFT())
  ]});

  return res.json(allArticles)
});

app.get('/bitcoin', async (req, res) => {
  const articles = []
  articles.push(
    ...(await uTodayBitcoin()), 
    ...(await newsBTCBitcoin()),
    ...(await cryptoMufasaBitcoin()),
    ...(await digitalBitcoin()),
    ...(await cryptoKnowBitcoin())
  );
  
  return res.json(articles)
});

app.get('/ethereum', async (req, res) => {
  const articles = []
  articles.push(
    ...(await uTodayEthereum()),
    ...(await newsBTCEthereum()),
    ...(await cryptoMufasaEthereum()),
    ...(await digitalEthereum()),
  );

  return res.json(articles)
});

app.get('/cardano', async (req, res) => {
  const articles = []
  articles.push(
    ...(await uTodayCardano()),
    ...(await newsBTCCardano())
  );

  return res.json(articles)
});

app.get('/dogecoin', async (req, res) => {
  const articles = []
  articles.push(
    ...(await uTodayDogecoin()),
    ...(await newsBTCDogecoin()),
    ...(await digitalDogecoin())
  );

  return res.json(articles)
});

app.get('/nft', async (req, res) => {
  const articles = []
  articles.push(
    ...(await uTodayNFT()),
    ...(await newsBTCNFT())
  );

  return res.json(articles)
});

redisClient.redis.on("connect", () => {
  console.log("Connected to Redis successfully.");

  app.listen(PORT, (err) => {
    if (err) {
      console.log(`Error listening on Port ${PORT}`);
    }
    console.log(`Server running on Port ${PORT}`);
  })  
});
