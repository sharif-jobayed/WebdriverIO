const {Given, When, Then} = require("@wdio/cucumber-framework");

Given(
    /^I am on the '(.*)' page$/,
    async (page) => {}
);

When(
    /^I click on the '(.*)' logo on the '(.*)' page$/,
    async (logo, page) => {}
);