Feature: Home page
  As a visitor
  I want to explore the Home page
  So that I can know about the features there

  Background:
    Given I am on the 'Home' page

  @Test-0001
  Scenario: A visitor exploring the Home page
    When I click on the 'Site' logo on the 'Home' page
    Then I remain on the 'Home' page
