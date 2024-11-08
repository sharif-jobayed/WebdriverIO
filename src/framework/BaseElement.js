class BaseElement {
    constructor(elementLocator, elementName) {
        this.elementLocator = $(elementLocator);
        this.elementLocators = $$(elementLocator);
        this.elementName = elementName;
    }
}

module.exports = {BaseElement}
