
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
            return new EmployeeList();
        } else if (pn.includes(`directory`)) {
            const { DirectoryPage } = await import(`../pages/directoryPage.js`);
            return new DirectoryPage();
        } else if (pn.includes(`add employee`)) {
            const { AddEmployeePage } = await import(`../pages/addEmployeePage.js`);
            return new AddEmployeePage();
        } else if (pn.includes(`personal details`)) {
            const { PersonalDetailsPage } = await import(`../pages/personalDetailsPage.js`);
            return new PersonalDetailsPage();
        } else if (pn.includes(`view directory`)) {
            const { ViewDirectoryPage } = await import(`../pages/viewDirectoryPage.js`);
            return new ViewDirectoryPage();
        }
        else {
            throw new Error(`Invalid page name: ${pageName}`);
        }

    }

}

export { PageBuilder }
