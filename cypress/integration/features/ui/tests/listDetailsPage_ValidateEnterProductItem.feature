@UI @R4LA-55 @LDP @SmokeTest @SKIP
Feature: List Details page - Validate Enter Product Items

  As a user Internal, I need to navigate to
  List Product Details page and verify that I am able
  to navigate to PDP and see the card product item

  Scenario: User should be able to see navigate to PLD and see the card product item
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When goes to section "Public" and clicks on list "AutCypressPublic"
    And should be able to see the group of list is ascending
    And should be able to enter a total of products "100"
    And should be able to click the card
    And should be able to see product number into the URL
    And should be able to see "100" products in the cart


