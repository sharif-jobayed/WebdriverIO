
Feature: IdeaScale test
  I am a visitor
  I want to register
  To make my profile at IdeaScale

  Background:
    Given I am on the 'Start' page
    Then The '' page is open
    And The '' page is loaded

  @Test-0001
  Scenario: Accept cookies
    When I click on the 'Accept' button on the 'Start' page
    