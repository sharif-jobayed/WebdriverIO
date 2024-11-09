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
    /^I hover on Training menu on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        page.hoverTrainingMenu();
    }
);

Then(
    /^The Training dropdown menu opens up on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        await page.trainingDropdownMenu.waitTillVisible(5000);
        assert.isTrue(await page.trainingDropdownMenu.isVisible(), `The training dropdown menu is not visible`);
    }
);
