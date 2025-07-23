Feature: Employee Management with OrangeHRM

  Background:
    Given I open the "Login" page
    Then the "Login" page is open
    And the "Login" page is loaded

  @login
  Scenario: Log in as Admin
    When I login with valid admin credentials on the "Login" page
    Then the "Dashboard" page is open
    And the "Dashboard" page is loaded
    Then I should see the "Dashboard" page

  @createEmployee
  Scenario: Create a New Employee with Login Details
    When I login with valid admin credentials on the "Login" page
    Then the "Dashboard" page is open
    And the "Dashboard" page is loaded
    Then I should see the "Dashboard" page

    When I click on the PIM menu on "Dashboard" page
    Then I am on the "Employee List" page
    And the "Employee List" page is open
    And the "Employee List" page is loaded

    When I click the Add button on "Employee List" page
    Then I am on the "Add Employee" page
    And the "Add Employee" page is open
    And the "Add Employee" page is loaded

    When I enter the employee's first name and last name and ID on "Add Employee" page
    And I enable the Create Login Details toggle on "Add Employee" page
    And I enter the username and password on "Add Employee" page
    And I submit the employee creation form on "Add Employee" page
    Then I am on the "Personal Details" page
    And the "Personal Details" page is open
    And the "Personal Details" page is loaded
    And I should see the newly created employee's first name and last name on "Personal Details" page

  @employeeInformationUpdate
  Scenario: Update Employee Information
    When I login with valid admin credentials on the "Login" page
    Then the "Dashboard" page is open
    And the "Dashboard" page is loaded
    Then I should see the "Dashboard" page

    When I click on the PIM menu on "Dashboard" page
    Then I am on the "Employee List" page
    And the "Employee List" page is open
    And the "Employee List" page is loaded

    When I search for employee's id in search field on "Employee List" page
    Then I should see the employee's profile in search results on "Employee List" page

  # When I click edit button for the employee on "Employee List" page
  # Then I am on the "Personal Details" page

  # When I click nationality drop down arrow on "Personal Details" page
  # Then country list is opened on "Personal Details" page
  # And I select "Algerian" from the country list on "Personal Details" page
  # And I click save button on "Personal Details" page
  # Then I am on the "Personal Details" page

  @searchInDirectoryByEmployeeName
  Scenario: Search in Directory by Employee Name
    When I login with valid admin credentials on the "Login" page
    Then the "Dashboard" page is open
    And the "Dashboard" page is loaded
    Then I should see the "Dashboard" page

    When I click on the Directory menu on "Dashboard" page
    Then I am on the "View Directory" page
    And the "View Directory" page is open
    And the "View Directory" page is loaded

    When I enter a name in the search field on "View Directory" page
    Then the names dropdown is opened on "View Directory" page
    And I select a name from the names dropdown on "View Directory" page


# @searchEmployeeById
# Scenario: Search Employee by ID
