@UI @R4LA-214 @LDP
Feature: List Details page - Product description and other product info

  As a user Internal or External I need to navigate to
  List Product Details page and check that I am able
  to see the navigate to PDP and see the card product item

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see navigate to PDP and see the card product item
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "<listName>"
    And should be able to see the group name from the list for the products in list details page
    And should be able to enter a total of products "<productItems>"
    And should be able to see product brand names
    And should be able to click the card
    And should be able to see product number into the URL
    And should be able to see "<productItems>" products in the cart

    Examples:
      | userType | uname       |   password      |listName                 |productItems|
      | Internal | tmid2       |   Welcome12     |AutCypressPublic         |10          |
      | External | prodsupp101 |   today123      |AutCypressMyShoppingList |100         |


