
const fs = require('fs');
const path = require('path');

class Pages {
	constructor(page) {
		this.page = page;
		this.pagesDir = path.join(__dirname, 'src/pages');
	}

	getPageObject() {
		const pageFiles = fs.readdirSync(this.pagesDir);

		for (const file of pageFiles) {
			const filePath = path.join(this.pagesDir, file);
			const PageClass = require(filePath);

			if (typeof PageClass === 'function') {
				const pageObject = new PageClass();

				if (pageObject.name && pageObject.name.includes(this.page)) {
					return pageObject;
				}
			}
		}

		throw new Error(`Page object with name including "${this.page}" not found.`);
	}
}

module.exports = { Pages };
