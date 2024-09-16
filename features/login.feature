Feature: Login functionality
    @smoke
    Scenario: Providing the sign up details
        Given I am on the homepage of Demoblaze as an existing user,
        When I click on the top login button as an existing user,
        And I enter the username 'Royco' correctly as an existing user,
        And I enter the password '12.Bricman' correctly as an existing user,
        And I click on the bottom login button as an existing user,
        Then dashboard should be displayed


    # Scenario: Viewing product details
    #     Given I am viewing the product catalog,
    #     When I click on a specific product,
    #     Then I should see detailed information about the product, including a description, price, and an "Add to cart" button


    # Scenario: Adding a product to the cart
    #     Given I am viewing the product details,
    #     When I click the "Add to cart" button,
    #     Then the product should be added to my shopping cart,
    #     And I should see a confirmation message that the product was successfully added.
