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
    # Then I am on the "Personal Details" page
    # And the "Personal Details" page is open
    # And the "Personal Details" page is loaded

    # When I verify the employee's full name on "Personal Details" page
    # Then I save the employee’s ID, username, and password to “generatedEmployee.json”
    # And I should see a success message confirming creation
    # And the profile header should display the full name correctly

# @employeeManagement
# Scenario: Update Employee Nationality
#   When I search for the newly created employee
#   When I update the nationality field
#   Then the nationality should be updated successfully

# @employeeManagement
# Scenario: Search Employee by ID
#   When I am on the PIM page
#   When I search the employee by saved employee ID
#   Then the employee should be found in the results

# @employeeManagement
# Scenario: Search Employee in Directory by Name
#   When I am on the "Directory" page
#   When I search the employee by full name
#   Then the employee should appear in the directory
