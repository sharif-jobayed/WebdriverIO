import {Given, Then, When} from '@wdio/cucumber-framework';
import {assert} from 'chai';
import {PageBuilder} from './PageBuilder.js';

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
        assert.isTrue(await page.isPageOpen(), `Page ${await page.getPageName()} is not open`);
    }
);

Then(
    /^The '(.*)' page is loaded$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        assert.isTrue(await page.isPageLoaded(), `Page ${await page.getPageName()} is not loaded`);
    }
);

When(
    /^I click on the Site logo on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        return page.clickSiteLogo();
    }
);

When(
    /^I hover on Training menu on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        return page.trainingMenuItem.hoverOn();
    }
);

Then(
    /^The Training dropdown menu opens up on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        assert.isTrue(await page.trainingMenuItem.isVisible(), `The ${await page.trainingDropdownMenu.getName()} is not visible`);
    }
);

When(
    /^I click on the Sign In link on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        return await page.signInLink.doClick();
    }
);
