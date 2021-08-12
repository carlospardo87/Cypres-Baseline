@story("R4PS-11") @feature("DirectProduct")
Feature: Product Details Page - Direct Product 

As a user I need to be able to see 
when a product is DIRECT 
so that I have more details 
about the product attributes 
and delivery method.

Background: Selects a direct product and a direct elegibile customer
Given  A direct eligible customer 
And    A direct product

@PDP @Direct  @suite("DirectProducts") 
Scenario Outline: User should be able to see direct products
Given User navigates to USF with "<device>"
When User logs in with valid credentials "<uname>" and "<password>"
Then selects a customer
And  navigates to  product details page
Then direct product icon should be displayed
And no returns text should be displayed
Examples:
    |   device      |uname |   password     |
    |   browser     |tmid2 |   Welcome12    |

