const {Given, When, Then} = require("@wdio/cucumber-framework");

Given(
    /^I am on the '(.*)' page$/,
    async (page) => {

    }
);

Then(
    /^The '(.*)' page is open$/,
    async (page) => {}
);

Then(
    /^The '(.*)' page is loaded$/,
    async (page) => {}
);

When(
    /^I click on the '(.*)' logo on the '(.*)' page$/,
    async (logo, page) => {}
);
