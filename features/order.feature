Feature: product order functionality
@regression
Scenario: Adding a product to the cart
        Given I am logged in with userName 'Royco' and password '12.Bricman' and I view the product details,
        When I select a product 'Samsung galaxy s6' and click the 'Add to cart' button,
        Then the product should be added to my shopping cart and I should see a confirmation message that the product was successfully added.
        