import { BasePage } from "../framework/basePage";


class ViewDirectoryPage extends BasePage {
	constructor() {
		super(`/directory/viewDirectory`);

		this.searchNameField = new BaseElement(`//input[@placeholder='Type for hints...']`);
		this.searchBtn = new BaseElement(`//button[@type='submit']`);
	}

	getEmployeeCreds = async () => {
	const credentials = JSON.parse(readFileSync(new URL('../data/employeeCredentials.json', import.meta.url)));
	return credentials;
}

	async enterEmployeeNameAndSearch() {
		const firstName = await this.getEmployeeCreds().then(data => data.firstName);
		await this.searchNameField.clearAndType(firstName);
		// await this.searchBtn.doClick();
		console.log(`Employee name: ${firstName} entered and searched`);
	}
}

export {ViewDirectoryPage}