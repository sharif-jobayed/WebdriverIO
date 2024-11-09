Feature: Home page
  As a visitor
  I want to explore the Home page
  So that I can know about the features there

  Background:
    Given I am on the 'Home' page
    Then The 'Home' page is open
    And The 'Home' page is loaded

  @Test-0001
  Scenario: Clicks on the site logo
    When I click on the Site logo on the 'Home' page
    Then I remain on the Home page

  @Test-0002
  Scenario: Put mouse pointer on the top-level menu item
    When I hover on Training menu on the 'Home' page
    Then The Training dropdown menu opens up on the 'Home' page

  @Test-0003
  Scenario Outline: Login to the user account
    When I click on the Sign In link on the 'Home' page
    Then The 'Customer Login' page is open
    And The 'Customer Login' page is loaded

    When I type '<email>' in the email field on the 'Customer Login' page
    And I type '<password>' in the password field on the 'Customer Login' page
    And I click the Sign In button on the 'Customer Login' page
    Then The 'Home' page is open
    And The 'Home' page is loaded

    Examples:
      | user           | email                 | password       |
      | Test User One  | t.user0001@yopmail.com| tPassword@00   |
