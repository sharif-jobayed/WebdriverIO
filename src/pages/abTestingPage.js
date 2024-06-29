
import { BasePage } from "./basePage.js";
import { BaseElement } from "../elements/baseElement.js";

class ABTestingPage extends BasePage {
	constructor() {
		super(`abtest`, `A/B Testing page`);

		this.abTestHeading = new BaseElement(`//h3[normalize-space()='A/B Test Control']`, `A/B Test heading`);
	}

	async getABTestHeadingText() {
		return this.abTestHeading.itsText();
	}
}

export { ABTestingPage }
