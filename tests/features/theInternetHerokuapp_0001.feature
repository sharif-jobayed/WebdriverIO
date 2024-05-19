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
    
    When I click 'AddElementButton' on the 'AddRemoveElementsPage'
    Then 'DeleteButton' is displayed on the 'AddRemoveElementsPage'

    When I click 'DeleteButton' on the 'AddRemoveElementsPage'
    Then 'DeleteButton' is not displayed on the 'AddRemoveElementsPage'

  @Test-0003
  Scenario: Basic Auth (user and pass: admin)
    When I click 'BasicAuthLink' on the 'HomePage'
    Then 'BasicAuthPage' is loaded
    
    When I enter 'admin' as Username & 'admin' as Password & accept it on the 'BasicAuthPage'
    Then 'BasicAuthConfirmationMessage' text is displayed on the 'BasicAuthPage'

  @Test-0004
  Scenario: Broken Images
    When I click 'BrokenImagesLink' on the 'HomePage'
    Then 'BrokenImagesPage' is loaded