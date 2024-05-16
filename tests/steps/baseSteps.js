const { Given, When, Then, } = require('@wdio/cucumber-framework');
const { assert, expect } = require('chai');
const Pages = require('../utils/pages.js');
const PageMessages = require('../utils/pageMessages.js');


const pages = new Pages();
const pageMessages = new PageMessages();

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
		return currentElement.clickEl();
	}
);
Then(
	/^'(.*)' is loaded$/,
	async (page) => {
		const currentPage = pages[page];
		return currentPage.isPageLoaded(5000);
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
When(
	/^I wait for the '(.*)' to open on the '(.*)'$/,
	async (theAlert, page) => {
		const currentPage = pages[page];
		return currentPage.waitForAlert(3000);
	}
);
When(
	/^I enter '(.*)' as Username & '(.*)' as Password & accept it on the '(.*)'$/,
	async (username, password, page) => {
		const currentPage = pages[page];
		return currentPage.handleBasicAuth(username, password);
	}
);
Then(
	/^'(.*)' text is displayed on the '(.*)'$/,
	async(theText, page) => {
		const currentPage = pages[page];
		assert.equal(await currentPage.ConfirmationMessage.text(3000), await pageMessages[theText], `The confirmation message is not shown yet`);
	}
);
