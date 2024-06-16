// import BasePage from "./basePage";
const BasePage = require('../pages/basePage.js');

class ABTestingPage extends BasePage {
  constructor() {
    super(`abtest`, `AB Testing page`);
  }
}

module.exports = ABTestingPage;
