
Feature: The Internet HerokuApp test-0001
	I'm a user
	I want to do activities on the website

	Background: Setup
		Given I am on the 'Main' page
		Then 'Main' page is open
		And 'Main' page is loaded

	@Test-0001
	Scenario: Test A/B Testing page
		When I click on the 'A/B Testing' link on 'Main' page
		Then I am on the 'A/B Testing' page
		And 'A/B Testing' page is open
		And 'A/B Testing' page is loaded
		And I see 'A/B Test' is present in the Paragraph heading on 'A/B Testing' page

	@Test-0002
	Scenario: Test Add/Remove Elements page
		When I click on the 'Add/Remove Elements' link on 'Main' page
		Then I am on the 'Add/Remove Elements' page
		And 'Add/Remove Elements' page is open
		And 'Add/Remove Elements' page is loaded
