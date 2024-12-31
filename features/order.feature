Feature: product order functionality
        # Background: place order
        @regression
        Scenario: Adding a product to the cart
                Given I am logged in with userName 'Royco' and password '12.Bricman' and I view the product details,
                When I select a product 'Samsung galaxy s6' and click the 'Add to cart' button,
                Then the product should be added to my shopping cart and I should see a confirmation message 'Product added.'.


        
        Scenario: Placing an order
                Given I am viewing my shopping cart,
                When I click the "Place Order" button,
                Then I should be prompted to enter my personal and payment information,
                And when I successfully complete the form,
                Then I should get my order details and toast message 'Thank you for your purchase!'


        @fast
        Scenario: Deleting an order
                Given I have previously placed an order and I view my shopping cart,
                When I click on cart button,
                When I click the delete 'Delete' button next to a product,
                Then the product should be removed from my cart and the total price should be updated accordingly.

