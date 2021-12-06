@UI @R4LA-231  @LP  @SmokeTest
Feature: List Page - Validate Edit List Dropdown Menu

  As a user Internal, I need to be able to see the dropdown for
  option list and edit list

  Scenario: User should be able to edit list
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And  goes to list "Public" and clicks menu options
    And should be able to see the popup options menu
    And should be able to see the list items contains "Edit List,Copy,Share,Download,Print,Delete"
    And should be able to click on "Edit List" option
    Then should be able to see the proper URL on "List Management" page




