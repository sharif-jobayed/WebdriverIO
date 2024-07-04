
Feature: Start page test
	I am a visitor
	I want to do activities on the page
	To check for issues

	Background: Common behavior
		Given I am on the 'Start' page
		Then The 'Start' page is open
		And The 'Start' page is loaded

	@Test-0001
	Scenario: Accept cookies
		When I click on the 'Accept' button on the 'Start' page
