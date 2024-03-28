import puppeteer from "puppeteer";

const scrapper = async (url, element, titleElement) => {
  const browser = await puppeteer.launch();
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
