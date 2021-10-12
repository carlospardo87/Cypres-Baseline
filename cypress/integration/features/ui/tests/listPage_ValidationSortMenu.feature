@UI @R4LA-45 @LP @SKIP
Feature: List Page - Validate Sort Menu

  As a user Internal I need to navigate to View All Lists Page
  and check that I am able to sort the list

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to sort the list menu
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    And should be able to sort the lists by "List Name"
    And should be able to sort the lists by "Last Updated By"
    And should be able to sort the lists by "Products"
    And should be able to sort the lists by "Discontinued"
