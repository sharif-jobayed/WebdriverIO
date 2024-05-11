const {Given, When, Then} = require('@wdio/cucumber-framework');
const Pages = require('../utils/commonActions.js');


const pages = new Pages();

Given(/^I am on the '(.*)'$/, async(page) => {
	await pages.homePage.goToHomePage();
	await pages.homePage.pageIsLoaded(5000);
});
When(/^I click on the '(.*)' link on the '(.*)' page$/, async(link, page) => {
	await pages.homePage.abTestingLink.doClick();
});
Then(/^$/, async() => {

});
