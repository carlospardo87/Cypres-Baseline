@story("R4PS-6") @feature("JustInTime")
Feature: Product Attributes - Just in Time (JIT)

Background: Selects a product JIT with no text in special vendor
Given  A customer 
And    A Product is JIT not direct not CES with no text in special vendor



@focus @PDP @JustInTime @ProductDetails  @suite("JustInTime") 
Scenario Outline: Product is Just in Time (JIT) - Special Vendor with no Text 
Given User navigates to USF with "<device>"
When User logs in with valid credentials "<uname>" and "<password>"
Then selects a customer
And  navigates to  product details page
Then use default text Just in Time and return as part of product information.
Examples:
    |   device      |uname |   password     |
    |   browser     |tmid2 |   Welcome12    |
