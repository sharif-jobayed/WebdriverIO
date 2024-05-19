const BaseElement = require("../elements/baseElement");
const BasePage = require("./basePage");


class BrokenImagesPage extends BasePage {

	constructor(pageURL, pageName) {
		super(pageURL, pageName);

		this.Images = new BaseElement(
			`//*[contains(@class,"example")]/img`,
			`Images`
		);
		this.ImageOne = new BaseElement(
			`//img[contains(@src,"asdf.jpg")]`,
			`ImageOne`
		)
		this.ImageTwo = new BaseElement(
			`//img[contains(@src,"hjkl.jpg")]`,
			`ImageTwo`
		)
		this.ImageThree = new BaseElement(
			`//img[contains(@src,"img/avatar-blank.jpg")]`,
			`ImageThree`
		)
	}

}

module.exports = BrokenImagesPage;
