class BaseElement {
	constructor(elementLocator, elementName) {
		this.locator = $(elementLocator);
		this.locators = $$(elementLocator);
		this.name = elementName;
	}

}

module.exports = new BaseElement();
