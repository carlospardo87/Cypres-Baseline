@UI @R4LA-56  @LDP  @SKIP
Feature: List Details page - Validate Elements

  As a user Internal or External I need to navigate to
  Product Description page and check that I am able
  to see the elements

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to see product description and other product information
    When "Internal" user logs in with valid credentials "R4TMID3" and "Winter246"
    And goes to dropdown and selects customer "24163578"
    And clicks on My Lists button
    #Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "AutCypressPublic_100"
    Then should be able to see the proper URL on "List Details" page
    And should be able to see product brand names
    And should be able to see product descriptions
    And should be able to see pack size contains "OZ,LBA,CN,LB,BG,ML,LT,GA,CT,EA"
    And should be able to see the quantity boxes
    And should be able to enter numbers in quantity boxes
    And should be able to see the product numbers contains #
    And should be able to see the product prices contains $





