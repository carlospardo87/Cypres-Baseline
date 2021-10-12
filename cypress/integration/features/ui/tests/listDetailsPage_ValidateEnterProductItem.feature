@UI @R4LA-55 @LDP @SmokeTest  @SKIP
Feature: List Details page - Validate Enter Product Items

  As a user Internal, I need to navigate to
  List Product Details page and verify that I am able
  to navigate to PDP and see the card product item

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to see navigate to PLD and see the card product item
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "AutCypressPublic_100"
    And should be able to see the group of list is ascending
    And should be able to enter a total of products "100"
    And should be able to click the card
    And should be able to see product number into the URL
    And should be able to see "100" products in the cart


