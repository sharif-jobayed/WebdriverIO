import {Given, Then, When} from '@wdio/cucumber-framework';
import {assert} from 'chai';
import {PageBuilder} from './PageBuilder.js'

const pageBuilder = new PageBuilder();

Given(
    /^I am on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        return page.goToPage();
    }
);

Then(
    /^The '(.*)' page is open$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        assert.isTrue(await page.isPageOpen(), `Page did not open`);
    }
);

Then(
    /^The '(.*)' page is loaded$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        const isLoaded = await page.isPageLoaded();
        assert.isTrue(isLoaded, `Page did not load correctly`);
    }
);

When(
    /^I click on the '(.*)' logo on the '(.*)' page$/,
    async (logo, pageName) => {
        const page = await pageBuilder.getPage(pageName);
        page.clickSiteLogo();
    }
);

When(
    /^I hover on '(.*)' link on the '(.*)' page$/,
    async (link, pageName) => {

    }
);

When(
    /^The dropdown menu opens up$/,
    async () => {

    }
);
