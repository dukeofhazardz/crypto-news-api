import puppeteer from "puppeteer";
import Chromium from "@sparticuz/chromium-min";


const scrapper = async (url, element, titleElement) => {
  const browser = await puppeteer.launch({
    args: [...Chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: Chromium.defaultViewport,
    executablePath: await Chromium.executablePath(
      `https://github.com/Sparticuz/chromium/releases/download/v116.0.0/chromium-v116.0.0-pack.tar`
    ),
    headless: Chromium.headless,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  const data = await page.evaluate((allElementSelector, titleSelector) => {
    const articles = document.querySelectorAll(allElementSelector);
    console.log('Selected articles:', articles);

    return Array.from(articles).map((article) => {
      const title = article.querySelector(titleSelector)?.textContent?.trim();
      const link = article.querySelector('a')?.href;
      return { title, link };
      });
    }, element, titleElement);
    await page.close();
    await browser.close();
    return data;
}

export { scrapper }
