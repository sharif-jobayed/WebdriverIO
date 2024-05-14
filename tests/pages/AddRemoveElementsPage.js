const BaseElement = require("../elements/baseElement.js");
const BasePage = require("./basePage.js");

class AddRemoveElementsPage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.AddElementButton = new BaseElement(`//button[@onclick="addElement()"]`, `AddElementButton`);
		this.DeleteButton = new BaseElement(`//button[@onclick="deleteElement()"]`, `DeleteButton`);
	}

}

module.exports = AddRemoveElementsPage;