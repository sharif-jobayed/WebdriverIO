// const { Given, When, Then } = require('@wdio/cucumber-framework');
// const { assert } = require('chai');
// const { PageBuilder } = require('./PageBuilder');

import {Given, When, Then} from '@wdio/cucumber-framework';
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
        // const page = await pageBuilder.getPage(pageName);
        // const logoElement = page[logo]; // Assuming logo is a defined element in the page object
        // await logoElement.doClick();
    }
);

When(
    /^I hover on '(.*)' link on the '(.*)' page$/,
    async (link, pageName) => {
        // const page = await pageBuilder.getPage(pageName);
        // const linkElement = page[link]; // Assuming link is a defined element in the page object
        // await linkElement.scrollIntoView();
        // await linkElement.moveTo(); // Hover over the element
    }
);

When(
    /^The dropdown menu opens up$/,
    async () => {
        // const dropdownMenu = await pageBuilder.getDropdownMenu(); // Assuming the dropdown is accessible via PageBuilder
        // assert.isTrue(await dropdownMenu.isVisible(), `Dropdown menu did not open`);
    }
);
