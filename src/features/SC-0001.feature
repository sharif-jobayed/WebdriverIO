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
    When I click on the 'Site' logo on the 'Home' page
    Then I remain on the Home page

  @Test-0002
  Scenario: Put mouse pointer on the top-level menu item
    When I hover on Training menu on the 'Home' page
    Then The Training dropdown menu opens up on the 'Home' page
