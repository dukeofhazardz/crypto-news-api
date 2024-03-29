import puppeteer from "puppeteer-core";
import Chromium from "@sparticuz/chromium";

const scrapper = async (url, element, titleElement) => {
  // Launch browser
  const browser = await puppeteer.launch({
    args: Chromium.args,
    defaultViewport: Chromium.defaultViewport,
    executablePath: await Chromium.executablePath(),
    headless: Chromium.headless,
    ignoreHTTPSErrors: true,
  });

  try {
    // Create a new page
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Execute in the browser context
    const data = await page.evaluate((allElementSelector, titleSelector) => {
      const articles = document.querySelectorAll(allElementSelector);
      const results = [];

      articles.forEach((article) => {
        const title = article.querySelector(titleSelector)?.textContent?.trim();
        const link = article.querySelector('a')?.href;
        if (title && link) {
          results.push({ title, link });
        }
      });

      return results;
    }, element, titleElement);

    return data;
  } finally {
    // Close the page and browser
    if (browser) {
      await browser.close();
    }
  }
};

export { scrapper };
