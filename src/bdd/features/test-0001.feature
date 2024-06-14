Feature: The Internet Heroku App test
  As a user of The Internet Heroku App Website
  I want to click each links on the homepage
  So that I can access those pages & do activities

  Background: Preconditions
    Given I am on the 'Home' page

  @Test-0001
  Scenario: A/B Testing
    When I click the 'A/B Testing' link on the 'Home' page
    Then the 'A/B Testing' page is opened
    And the 'A/B Testing' page is loaded
    And I should see 'A/B Test Variation 1' paragraph is displayed on the 'A/B Testing' page
    And I navigate back to the 'Home' page
