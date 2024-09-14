Feature: Login functionality
@smoke
Scenario: Providing the sign up details
Given I am on the homepage of Demoblaze as an existing user,
    When I click on the top login button as an existing user,
    And I enter the username 'Royco' correctly as an existing user,
    And I enter the password '12.Bricman' correctly as an existing user,
    And I click on the bottom login button as an existing user,
     Then dashboard should be displayed
