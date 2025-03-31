import {When} from "@wdio/cucumber-framework";
import {PageBuilder} from '../framework/PageBuilder.js';

const pageBuilder = new PageBuilder();

When(
    /^I type '(.*)' in the email field on the '(.*)' page$/,
    async (emailAddress, pageName) => {
        const page = await pageBuilder.getPage(pageName);
        return await page.userEmailField.clearAndType(emailAddress);
    }
);

When(
    /^I type '(.*)' in the password field on the '(.*)' page$/,
    async (userPassword, pageName) => {
        const page = await pageBuilder.getPage(pageName);
        return await page.userPasswordField.clearAndType(userPassword);
    }
);

When(
    /^I click the Sign In button on the '(.*)' page$/,
    async (pageName) => {
        const page = await pageBuilder.getPage(pageName);
        await page.signInButton.doClick();
    }
);