@UI @R4LA-231  @LP  @SmokeTest @SKIP
Feature: List Page - Validate Edit List Dropdown

  As a user Internal, I need to be able to see the dropdown for
  option list and edit list

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to edit list
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And  goes to list "Public" and clicks menu options
    And should be able to see the popup options menu
    And should be able to see the list items contains "Edit List,Copy,Share,Download,Print,Delete"
    And should be able to click on "Edit List" option
    Then should be able to see the proper URL on "List Management" page




