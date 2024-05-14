const { Given, When, Then, } = require('@wdio/cucumber-framework');
const { assert, expect } = require('chai');
const Pages = require('../utils/pages.js');


const pages = new Pages();

Given(
	/^I am on the '(.*)'$/,
	async (page) => {
		const currentPage = pages[page];

		await currentPage.goToURL();
		assert.isTrue(await currentPage.isPageOpen(), `${await currentPage.name} is not open yet`);
	}
);
When(
	/^I click '(.*)' on the '(.*)'$/,
	async (element, page) => {
		const currentElement = pages[page][element];

		await currentElement.clickEl();
	}
);
Then(
	/^'(.*)' is loaded$/,
	async (page) => {
		const currentPage = pages[page];

		await currentPage.isPageLoaded(5000);
	}
);
Then(
	/^'(.*)' sentence exists in the '(.*)' on the '(.*)'$/,
	async (sentence, element, page) => {
		const currentElement = pages[page][element];
		expect(await currentElement.isExistInEl(sentence)).to.be.true;		
	}
);
Then(
	/^'(.*)' is displayed on the '(.*)'$/,
	async (element, page) => {
		const currentElement = pages[page][element];
		assert.isTrue(await currentElement.isVisibleEl(), `${currentElement} is not visible on the ${page}`);
	}
);
Then(
	/^'(.*)' is not displayed on the '(.*)'$/,
	async (element, page) => {
		const currentElement = pages[page][element];
		assert.isFalse(await currentElement.isVisibleEl(), `${currentElement} is visible on the ${page}`);
	}
);
