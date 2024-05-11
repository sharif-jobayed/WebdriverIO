const {Given, When, Then} = require('@wdio/cucumber-framework');
const Pages = require('../testUtils/pages.js');


const pages = new Pages();

Given(/^I am on the '(.*)'$/, async(page) => {
	await pages.homePage.goToHomePage();
});
When(/^I click on the '(.*\/*)' on the '(.*)'$/, async(link, page) => {
	
});
Then(/^I am on the '(.*\/)'$/, async(page) => {

});
