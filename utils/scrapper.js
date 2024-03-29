import axios from "axios"; // for making HTTP requests
import cheerio from "cheerio";

const scrapper = async (url, element, titleElement) => {
  try {
    // Fetch the HTML content from the URL
    const response = await axios.get(url);
    const html = response.data;

    // Load the HTML content into Cheerio
    const $ = cheerio.load(html);

    // Select elements using Cheerio selectors and extract data
    const articles = $(element);
    const results = [];

    articles.each((index, article) => {
      const title = $(article).find(titleElement).text().trim();
      const link = $(article).find('a').attr('href');
      if (title && link) {
        results.push({ title, link });
      }
    });

    return results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

export { scrapper };
