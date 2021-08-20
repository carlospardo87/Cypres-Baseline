@UI @R4LA-213  @LDP
Feature: List Details page - Validate Elements

  As a user Internal or External I need to navigate to
  Product Description page and check that I am able
  to see the elements

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see product description and other product information
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "<listName>"
    Then should be able to see the proper URL on "<listName>" details page
    And should be able to see product descriptions
    And should be able to see pack size contains "OZ,LBA,CN,LB,BG,ML,LT,GA,CT,EA"
    And should be able to see the quantity boxes
    And should be able to enter numbers in quantity boxes
    And should be able to see the product numbers contains #
    #And should be able to see the product prices contains $


    Examples:
      | userType | uname       |   password      |listName|
      #| Internal | tmid2       |   Welcome12     |AutCypressPublic|
      | External | prodsupp101 |   today123      |AutCypressMyShoppingList|



