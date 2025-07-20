@login
Feature: SauceDemo Login
  As a user, I want to be able to log in to the SauceDemo application
  so that I can access the product inventory.

  Background:
    Given I am on the SauceDemo "login" page
    Then the "login" page is open
    And the "login" page is loaded

  @smoke
  Scenario: Successful Login with a standard user
    When I enter the username "standard_user" on "Login" page
    And I enter the password "secret_sauce" on "Login" page
    And I click the "Login" button on "Login" page
    # Then I should be redirected to the "Products" page

# @negative
# Scenario: Attempt to login with a locked out user
#   When I enter the username "locked_out_user"
#   And I enter the password "secret_sauce"
#   And I click the login button
#   Then I should see an error message "Epic sadface: Sorry, this user has been locked out."

# @negative
# Scenario: Attempt to login with an invalid password
#   When I enter the username "standard_user"
#   And I enter the password "wrong_password"
#   And I click the login button
#   Then I should see an error message "Epic sadface: Username and password do not match any user in this service"

# @regression
# Scenario Outline: Login with various valid user types
#   When I enter the username "<username>"
#   And I enter the password "secret_sauce"
#   And I click the login button
#   Then I should be redirected to the products page

#   Examples:
#     | username                |
#     | standard_user           |
#     | problem_user            |
#     | performance_glitch_user |

# @negative @regression
# Scenario Outline: Invalid login attempts with different error messages
#   When I enter the username "<username>"
#   And I enter the password "<password>"
#   And I click the login button
#   Then I should see an error message "<errorMessage>"

#   Examples:
#     | username      | password     | errorMessage                                                              |
#     | invalid_user  | secret_sauce | Epic sadface: Username and password do not match any user in this service |
#     | standard_user |              | Epic sadface: Password is required                                        |
#     |               | secret_sauce | Epic sadface: Username is required                                        |