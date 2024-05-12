const {Given, When, Then} = require('@wdio/cucumber-framework');
// const { assert, expect } = require('chai');
const Pages = require('../testUtils/pages.js');


const pages = new Pages();

Given(/^I am on the '(.*)'$/, async(page) => {
	await pages.homePage.goToHomePage();
	await pages.homePage.pageIsLoaded(5000);
});
When(/^I click on the '(.*\/*)' on the '(.*)'$/, async(link, page) => {
	await pages.homePage.abTestingPageLink.doClick();
});
Then(/^I am on the '(.*\/)'$/, async(page) => {

});
