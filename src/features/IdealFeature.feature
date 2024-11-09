Feature: User Login and Product Search
  As a registered user
  I want to log in to the e-commerce platform
  So that I can search for and view products in my account.

  Background:
    Given the user is on the "Login" page

  @smoke @login
  Scenario: Successful Login with Valid Credentials
    When the user enters valid credentials
      | username | password  |
      | john_doe | secure123 |
    And clicks the "Login" button
    Then the user should see their account dashboard with a welcome message "Welcome, John Doe"

  @negative @login
  Scenario: Login Attempt with Invalid Credentials
    When the user enters invalid credentials
      | username  | password   |
      | john_doe  | wrongpass  |
    And clicks the "Login" button
    Then an error message "Invalid username or password" should be displayed

  @search @smoke
  Scenario: Product Search by Valid Keyword
    Given the user is logged in
    When the user searches for "laptop" in the search bar
    Then products related to "laptop" should be displayed
    And the first product in the results should contain the keyword "laptop"

  @search @negative
  Scenario: Product Search with No Matching Results
    Given the user is logged in
    When the user searches for "unicorn" in the search bar
    Then a message "No products found for 'unicorn'" should be displayed

  @logout
  Scenario: User Logout
    Given the user is logged in
    When the user clicks on the "Logout" button
    Then the user should be redirected to the "Login" page
    And a message "You have been successfully logged out" should be displayed
