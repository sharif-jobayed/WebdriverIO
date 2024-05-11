const {Given, When, Then} = require('@wdio/cucumber-framework');
const CommonActions = require('../utils/commonActions.js');


const commonActions = new CommonActions();

Given(/^I am on the '(.*)'$/, async() => {
	await commonActions.homePage.goToHomePage();
});
When(/^$/, async() => {

});
Then(/^$/, async() => {

});
