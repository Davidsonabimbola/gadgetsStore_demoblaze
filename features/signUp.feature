Feature: Signup Functionality

Scenario Outline: Providing the sign up details
    Given I am on the homepage of Demoblaze,
    When I click on the signup button,
    And I enter the username <username> correctly,
    And I enter the password '<password>' correctly,
    And I click on the Signup button,
    # Then my account should be created,
    # And I should receive a confirmation message that my account has been successfully registered.

    Examples:
        | username | password | 
        | Konpany | 12.Bricks.12| 
        | Lavarel | Dercos.009 | 
        | Damsel | Painter002  | 

# Scenario: Providing the sign up details
# Given I am on the homepage of Demoblaze,
#     When I click on the Signup 'Signup' button,
#     And I enter the username 'Vicker' correctly,
#     And I enter the password 'Blaise' correctly,
#     And I click on the signup 'Sign up' button,
#     Then my account should be created,
#     And I should receive a confirmation message that my account has been successfully registered.

        

