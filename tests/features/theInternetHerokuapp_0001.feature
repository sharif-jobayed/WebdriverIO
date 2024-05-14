Feature: User Login
  As a user
  I want to log in to my account
  So that I can access my profile and use the application

  Background:
    Given I am on the 'HomePage'
    Then 'HomePage' is loaded

  @Test-0001
  Scenario: A/B Testing
    When I click 'ABTestingLink' on the 'HomePage'
    Then 'ABTestingPage' is loaded
    And 'split testing' sentence exists in the 'Paragraph' on the 'ABTestingPage'

  @Test-0002
  Scenario: Add/Remove Elements
    When I click 'AddRemoveElementsLink' on the 'HomePage'
    Then 'AddRemoveElementsPage' is loaded
