const { $, $$ } = require('@wdio/globals');

class BaseElement {
  constructor(elementLocator, elementName) {
    this.locator = $(elementLocator);
    this.locators = $$(elementLocator);
    this.name = elementName;
  }

  async doClick() {
    try {
      console.log(`Clicking on ${this.name}`);
      await (await this.locator).click();
    } catch (error) {
      console.error(`Error clicking on ${this.name}: ${error}`);
      throw error;
    }
  }

  async elementText() {
    try {
      console.log(`Getting text from ${this.name}`);
      return await (await this.locator).getText();
    } catch (error) {
      console.error(`Error getting text from ${this.name}: ${error}`);
      throw error;
    }
  }

  async clearAndType(value) {
    try {
      console.log(`Clearing and typing into ${this.name}`);
      await (await this.locator).clearValue();
      await (await this.locator).addValue(value);
    } catch (error) {
      console.error(`Error clearing and typing into ${this.name}: ${error}`);
      throw error;
    }
  }

  async isDisplayed() {
    try {
      console.log(`Checking if ${this.name} is displayed`);
      return await (await this.locator).isDisplayed();
    } catch (error) {
      console.error(`Error checking if ${this.name} is displayed: ${error}`);
      throw error;
    }
  }

  async isEnabled() {
    try {
      console.log(`Checking if ${this.name} is enabled`);
      return await (await this.locator).isEnabled();
    } catch (error) {
      console.error(`Error checking if ${this.name} is enabled: ${error}`);
      throw error;
    }
  }

  async getAttribute(attributeName) {
    try {
      console.log(`Getting attribute '${attributeName}' from ${this.name}`);
      return await (await this.locator).getAttribute(attributeName);
    } catch (error) {
      console.error(`Error getting attribute '${attributeName}' from ${this.name}: ${error}`);
      throw error;
    }
  }
}

module.exports = BaseElement;
