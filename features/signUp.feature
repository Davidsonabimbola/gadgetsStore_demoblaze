Feature: Signup Functionality
    @signup
    Scenario Outline: Providing the sign up details
        Given I am on the homepage of Demoblaze,
        When I click on the signup button,
        And I enter the username <username> correctly,
        And I enter the password '<password>' correctly,
        And I click on the Signup button,
        # Then my account should be created and I should receive a confirmation message that my account has been successfully registered.

        Examples:
            | username         | password     |
            | Olutayotambramo  | 12.Bricks.12 |
            | Theresasonbramo  | Dercos.009   |
            | Fathermanoladons | Painter002   |




