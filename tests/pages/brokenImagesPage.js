const BaseElement = require("../elements/baseElement");
const BasePage = require("./basePage");


class BrokenImagesPage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.Images = new BaseElement(
			`//*[contains(@class,"example")]/img`,
			`Images`
		);
		this.imageOne = new BaseElement(
			`//img[contains(@src,"asdf.jpg")]`,
			`imageOne`
		)
		this.imageTwo = new BaseElement(
			`//img[contains(@src,"hjkl.jpg")]`,
			`imageTwo`
		)
		this.imageThree = new BaseElement(
			`//img[contains(@src,"img/avatar-blank.jpg")]`,
			`imageThree`
		)
	}

}

module.exports = BrokenImagesPage;
