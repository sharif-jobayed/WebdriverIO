# WebdriverIO OrangeHRM Automation Project

This project is an automated testing suite for the OrangeHRM demo application, built using WebdriverIO and Cucumber. It covers scenarios such as login, employee management, and other HRM functionalities, providing robust end-to-end test coverage.

## Tools & Technologies Used
- **WebdriverIO**: Main test automation framework
- **Cucumber**: BDD-style feature files and step definitions
- **Node.js**: JavaScript runtime
- **Allure Reporter**: For generating test reports
- **@faker-js/faker**: For generating fake test data
- **ChromeDriver**: For running tests in the Chrome browser

## Installation

1. **Clone the repository:**
   ```sh
   git clone <repository-url>
   cd WebdriverIO
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```
   This will install all required packages as specified in `package.json`.

## Running the Tests

- **Run all tests:**
  ```sh
  npx wdio
  or, run the scripts from package.json
  ```

- **Generate Allure Report:**
  After running tests, generate the Allure report with:
  ```sh
  npx allure generate allure-results --clean -o allure-report
  npx allure open allure-report
  ```

## Project Structure
- `src/features/` — Cucumber feature files
- `src/steps/` — Step definitions
- `src/pages/` — Page Object Model files
- `wdio.conf.js` — WebdriverIO configuration
- `allure-results/` & `allure-report/` — Test results and reports

## Notes
- Make sure you have Node.js (v14 or higher) installed.
- Chrome browser should be installed for local test execution.
- Update credentials and test data as needed in the relevant files.

---
Feel free to contribute or raise issues for improvements!
