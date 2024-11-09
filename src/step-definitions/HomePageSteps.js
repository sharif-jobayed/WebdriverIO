import {Then} from "@wdio/cucumber-framework";
import {assert} from 'chai';
import {PageBuilder} from '../framework/PageBuilder.js';

const pageBuilder = new PageBuilder();

Then(
    /^I remain on the Home page$/,
    async () => {
        const page = await pageBuilder.getPage(`Home`);
        assert.equal(await page.getPageURL(), ``, `Not on the Home page`);
    }
);
