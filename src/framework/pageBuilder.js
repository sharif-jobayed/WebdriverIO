import { AddEmployeePage } from '../pages/addEmployeePage.js';
import { DashboardPage } from '../pages/dashboardPage.js';
import { EmployeeList } from '../pages/EmployeeListPage.js';
import { LoginPage } from '../pages/loginPage.js';
import { PersonalDetailsPage } from '../pages/personalDetailsPage.js';
import { ViewDirectoryPage } from '../pages/viewDirectoryPage.js';

class PageBuilder {
	async getPage(pageName) {
		switch (pageName.toLowerCase()) {
			case 'login':
				return new LoginPage();
			case 'dashboard':
				return new DashboardPage();
			case 'add employee':
				return new AddEmployeePage();
			case 'personal details':
				return new PersonalDetailsPage();
			case 'employee list':
				return new EmployeeList();
			case 'view directory':
				return new ViewDirectoryPage();
			default:
				throw new Error(`Page "${pageName}" is not defined in PageBuilder`);
		}
	}
}

export { PageBuilder };