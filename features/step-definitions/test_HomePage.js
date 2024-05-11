const {Given, When, Then} = require('@wdio/cucumber-framework');
const Pages = require('../utils/pages.js');


const pages = new Pages();

Given(/^I am on the '(.*)'$/, async(page) => {
	
});
When(/^I click on the '(.*)' link on the '(.*)'$/, async(link, page) => {
	
});
Then(/^I am on the '(.*)'$/, async(page) => {

});
