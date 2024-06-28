
import { BaseElement } from "../elements/baseElement.js";
import { BasePage } from "./basePage.js";

class BasicAuthPage extends BasePage {
	constructor() {
		super(`basic_auth`, `Basic Auth page`);

		this.confirmationParagraph = new BaseElement(
			`//div[@id="content"]//*[contains(text(),'Congratulations')]`,
			`Confirmation paragraph`
		);
	}

	async handleBaseAuth(username, password) {
		const url = `https://${username}:${password}@the-internet.herokuapp.com/${this.pageURL}`;
		return this.openPage(url);
	}
	async getConfirmationText() {
		const confirmationText = await this.confirmationParagraph.itsText();
		return confirmationText;
	}
}

export { BasicAuthPage };

