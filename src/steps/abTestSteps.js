
import { Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import { Converters } from '../utils/converters.js';

const converters = new Converters();

Then(
	/^I see '(.*)' is present in the Paragraph heading on '(.*)' page$/,
	async function (text, pageName) {
		const page = await converters.getPage(pageName);
		const hText = await page.getABTestHeadingText();
		assert.isTrue(await hText.includes(text), `${text} isn't present in the paragraph`);
	}
);
