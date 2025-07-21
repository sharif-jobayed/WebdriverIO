Feature: Employee Management with OrangeHRM

  Background:
    Given I open the "Login" page
    Then the "Login" page is open
    And the "Login" page is loaded

  Scenario: Log in as Admin
    When I login with valid admin credentials on the "Login" page
    Then the "Dashboard" page is open
    And the "Dashboard" page is loaded
    Then I should see the "Dashboard" page
    And I click on the PIM menu on "Dashboard" page

  Scenario: Create a New Employee with Login Details
    Given I am on the "Employee List" page
    Then the "Employee List" page is open
    And the "Employee List" page is loaded
    When I click on the Add Employee button on "Employee List" page
    Then the "Add Employee" page is open
    When I add a new employee with generated data on "Add Employee" page
  #   Then the employee should be created successfully
  #   And the profile should display the correct full name

  # Scenario: Update Employee Nationality
  #   Given I search for the newly created employee
  #   When I update the nationality field
  #   Then the nationality should be updated successfully

  # Scenario: Search Employee by ID
  #   Given I am on the PIM page
  #   When I search the employee by saved employee ID
  #   Then the employee should be found in the results

  # Scenario: Search Employee in Directory by Name
  #   Given I am on the "Directory" page
  #   When I search the employee by full name
  #   Then the employee should appear in the directory
