@story("R4PS-4") @feature("ProductDescription")
Feature: Product Details Page - Product Description 

As a user I need to be able to select a product from list 
and be navigated to the product details page 
so that I can learn more about a product.

Background: Selects a normal product 
Given  A customer 
And A product

@PDP  @suite("ProductDescription") 
Scenario Outline: User should be able to see product descriptions
Given User navigates to USF with "<device>"
When User logs in with valid credentials "<uname>" and "<password>"
Then selects a customer
And  navigates to  product details page
Then User should be able to see description of product
And User should be able to see  product number
And User should be able to see  pack size
And User should be able to see  quantity Field 
Examples:
    |   device      |uname |   password     |
    |   browser     |tmid2 |   Welcome12    |



