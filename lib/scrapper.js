import puppeteer from "puppeteer";

const scrapper = async (url, element, titleElement) => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(url)

  return await page.evaluate((allElementSelector, titleSelector) => {
    const articles = document.querySelectorAll(allElementSelector);

    return Array.from(articles).map((article) => {
    const title = article.querySelector(titleSelector).textContent;
    const link = article.querySelector('a').href;
    return { title, link };
    });
  }, element, titleElement);
}

export { scrapper }