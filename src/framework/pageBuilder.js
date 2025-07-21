
class PageBuilder {

    async getPage(pageName) {
        const pn = await pageName.toLowerCase();

        if (pn.includes(`login`)) {
            const { LoginPage } = await import(`../pages/loginPage.js`);
            return new LoginPage();
        } else if (pn.includes(`dashboard`)) {
            const { DashboardPage } = await import(`../pages/dashboardPage.js`);
            return new DashboardPage();
        } else if (pn.includes(`employee list`)) {
            const { EmployeeList } = await import(`../pages/EmployeeListPage.js`);
            return new PIMPage();
        } else if (pn.includes(`directory`)) {
            const { DirectoryPage } = await import(`../pages/directoryPage.js`);
            return new DirectoryPage();
        } else if (pn.includes(`add employee`)) {
            const { AddEmployeePage } = await import(`../pages/addEmployeePage.js`);
            return new AddEmployeePage();
        }
        else {
            throw new Error(`Invalid page name: ${pageName}`);
        }

    }

}

export { PageBuilder }
