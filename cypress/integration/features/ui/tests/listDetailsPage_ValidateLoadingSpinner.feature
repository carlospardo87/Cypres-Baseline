@UI @R4LA-261  @LDP
Feature: List Details page - Create a spinner for loading lists

  As a user Internal or External
  I want to see a loading spinner icon before the lists are loaded
  so that I know the page is still responding.

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see the spinner icon for loading
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "<listName>"
    Then should be able to see the loading spinner appears with text "One moment please while we cook up your lists."

    Examples:
      | userType | uname       |   password      |listName|
      | Internal | tmid2       |   Welcome12     |AutCypressPublic|
      | External | prodsupp101 |   today123      |AutCypressMyShoppingList|