import puppeteer from "puppeteer";

const scrapper = async (url, element, titleElement, timeout = 30000) => {
  let browser, page;

  try {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout });

    const data = await page.evaluate((allElementSelector, titleSelector) => {
      const articles = document.querySelectorAll(allElementSelector);
      console.log('Selected articles:', articles);

      return Array.from(articles).map((article) => {
        const title = article.querySelector(titleSelector)?.textContent?.trim() || '';
        const link = article.querySelector('a')?.href || '';
        return { title, link };
      });
    }, element, titleElement);

    return data;
  } catch (error) {
    console.error('Error occurred during scraping:', error);
    return [];
  } finally {
    if (page) await page.close();
    if (browser) await browser.close();
  }
}

export { scrapper }
