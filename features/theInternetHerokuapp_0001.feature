

Feature: Test "The Internet Heroku App"
	I am a visitor
	I do various operations in the application
	To test the application

	Background: Homepage
		Given I am on the 'Homepage'

	Scenario Outline: I check if "businesses are able to simultaneously" is available in a paragraph
		When I click on 'A/B Testing' link
		