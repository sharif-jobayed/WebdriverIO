Feature: Test "The Internet Heroku App"
	I am a visitor
	I do various operations in the application
	To test the application

	Background: Landed on the Home Page
		Given I am on the 'Home Page'

	Scenario: I check if 'businesses are able to' exists in a paragraph
		When I click on the 'A/B Testing link' on the 'Home Page'
		Then I am on the 'A/B Testing Page'
