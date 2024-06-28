
import { When, Then } from "@wdio/cucumber-framework";
import { assert } from "chai";
import { Converters } from "../utils/converters.js";
import { shortText } from "../utils/constants.js";

const converters = new Converters();

When(
	/^I handle '(.*)' prompt on '(.*)' page$/,
	async function (promptName, pageName) {
		const page = await converters.getPage(pageName);
		return page.handleBaseAuth(`admin`, `admin`);
	}
);

Then(
	/^I see '(.*)' is present in the Paragraph on '(.*)' page$/,
	async function (text, pageName) {
		const page = await converters.getPage(pageName);
		const pText = await page.getConfirmationText();
		assert.isTrue(await pText.includes(shortText.basicAuthCongratulation), `${text} isn't found in the confirmation`);
	}
);
