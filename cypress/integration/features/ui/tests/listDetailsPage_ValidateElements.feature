@UI @R4LA-56 @LDP @SKIP
Feature: List Details page - Validate Elements

  As a user Internal, I need to navigate to
  Product Details page and verify that I am able
  to see product attributes.

  Scenario: User should be able to see product description and other product information
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When goes to section "Public" and clicks on list "AutCypressPublic"
    Then should be able to see the proper URL on "List Details" page
    And should be able to see product brand names in capital letters
    And should be able to see product descriptions
    And should be able to see pack size contains "OZ,LBA,CN,LB,BG,ML,LT,GA,CT,EA"
    And should be able to see the quantity boxes
    And should be able to enter numbers in quantity boxes
    And should be able to see value "0" in quantity boxes
    And should be able to enter "0-999" in quantity boxes
    And should be able to see the product numbers contains #
    And should be able to see the product prices contains $

    #And should able to see the product note and full product note




