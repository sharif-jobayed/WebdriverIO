const HomePage = require('../pages/homePage.js');
const ABTestingPage = require('../pages/abTestingPage.js');

class DataProcessor {
  constructor() {
    this.pages = {
      home: new HomePage(),
      abTesting: new ABTestingPage()
    };
  }

  async pageProcessor(value) {
    const pageName = value.toLowerCase();    
    for (const key in this.pages) {
      if (this.pages[key].name.toLowerCase().includes(pageName)) {
        return this.pages[key];
      }
    }
    throw new Error('Invalid page');
  }
}

module.exports = DataProcessor;
