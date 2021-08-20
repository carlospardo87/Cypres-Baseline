@UI @R4LA-215  @LDP
Feature: List Details page - Validate Navigation

  As a user Internal or External I need to be able
  to click on a list per section and be able to navigate
  to the product details page

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to navigate to product details page
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "<section>" and clicks on list "<listName>"
    Then should be able to see the proper URL on "<listName>" details page
    And should be able to see the header title contain "<listName>"

    Examples:
      | userType | uname       |   password      |section               |listName|
      | Internal | tmid2       |   Welcome12     |Public                |AutCypressPublic|
      | Internal | tmid2       |   Welcome12     |Internal              |AutCypressInternal|
      | Internal | tmid2       |   Welcome12     |Private               |AutCypressPrivate|
      | Internal | tmid2       |   Welcome12     |Managed by US Foods   |Order Guide|
      | External | prodsupp101 |   today123      |My Shopping Lists     |AutCypressMyShoppingList|
      | External | prodsupp101 |   today123      |Managed by US Foods   |Order Guide|