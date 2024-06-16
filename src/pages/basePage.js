// const { browser } = require('webdriverio');

class BasePage {
  constructor(pageURL, pageName) {
    this.url = pageURL;
    this.name = pageName;
  }

  async navigate() {
    await browser.url(this.url);
  }

  async currentURL() {
    return await browser.getUrl();
  }

  async open() {
    await this.navigate();
  }
}

module.exports = BasePage;
