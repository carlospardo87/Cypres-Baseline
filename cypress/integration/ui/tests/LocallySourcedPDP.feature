@story("R4PS-7") @feature("LocallySourcedProduct")
Feature: Product Details Page - Locally Sourced product 

Background: Selects a direct product and a direct elegibile customer
Given  A customer 
And    A locally sourced product

@PDP @LocallySourced @suite("LocallySourced")
Scenario Outline: User should be able to see locally sourced products
Given User navigates to USF with "<device>"
When User logs in with valid credentials "<uname>" and "<password>"
Then selects a customer
And  navigates to  product details page
Then locally sourced icon should be displayed
Examples:
    |   device      |uname |   password     |
    |   browser     |tmid2 |   Welcome12    |


