@UI @R4LA-262 @LP
Feature: List Page - Validate Sort Menu

  As a user Internal or External I need to navigate to My List Page
  and check that I am able to sort the list

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to sort the list menu
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button and updates list items
    Then should be able to sort the lists by "List Name"
    And should be able to sort the lists by "Last Updated By"
    And should be able to sort the lists by "Products"
    And should be able to sort the lists by "Discontinued"


    Examples:
      | userType |uname        |   password    |
      | Internal |tmid2       |   Welcome12    |
      | External |prodsupp101 |   today123     |