const Element = require('../elements/baseElement.js');

class BasePage {
  constructor(pageURL, pageName) {
    this.url = pageURL;
    this.name = pageName;
    this.linkByText = (text) => {
      return new Element(
        `//a[contains(text(),'${text}')]`,
        `${text} link on the ${this.name} page`
      );
    }
  }

  async goToPage() {
    await browser.url(this.url);
  }

  async currentURL() {
    return await browser.getUrl();
  }

  async getLinkByText(text) {
    return this.linkByText(text);
  }
}

module.exports = BasePage;
