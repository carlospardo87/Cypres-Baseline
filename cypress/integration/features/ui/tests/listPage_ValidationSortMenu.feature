@UI @R4LA-45 @LP
Feature: List Page - Validate Sort Menu

  As a user Internal or External I need to navigate to My List Page
  and check that I am able to sort the list

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to sort the list menu
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    #Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And should be able to sort the lists by "List Name"
    And should be able to sort the lists by "Last Updated By"
    And should be able to sort the lists by "Products"
    And should be able to sort the lists by "Discontinued"
