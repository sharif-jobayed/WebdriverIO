const { browser } = require('webdriverio');

class BasePage {
  constructor(pageURL, pageName) {
    this.url = pageURL;
    this.name = pageName;
  }

  // Navigate to the page URL
  async navigate() {
    await browser.url(this.url);
  }

  // Get the current URL of the browser
  async currentURL() {
    return await browser.getUrl();
  }

  // Alias for navigate
  async open() {
    await this.navigate();
  }
}

module.exports = BasePage;
