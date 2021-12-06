@UI @LP  @R4LA-240
Feature: List Page - Validate Modal Create A New List

  As a user Internal or External, I need to navigate
  to View All Lists and go through the modal
  to Create New List

  Background:
    Given User navigates to USF with "browser"

  @SmokeTest
  Scenario Outline: User should be able to create a new list
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "<optionList>"
    And should be able to enter list name "List Name Test"
    And should be able to enter list name upto "30" characters
    And should be able to select "3" List Type
    And should be able to select List Type "<listType>"
    And should be able to see the "Create" button enabled
    And should be able to close create list modal

    Examples:
      | optionList  | listType |
      | New List    | Public   |
      | Copy List   | Internal |
      | Import List | Private  |


  @SmokeTest
  Scenario: User should be able to create a new list
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    When clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "New List"
    And should be able to enter list name "List Name Test"
    And should be able to enter list name upto "30" characters
    And should be able to select "None" List Type
    And should be able to select List Type "None"
    And should be able to see the "Create" button enabled
    And should be able to close create list modal



  @R4LA-433
  Scenario Outline: User should not able to create duplicate list
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "<optionList>"
    And should be able to enter list name "AutCypressPublic"
    And should be able to click on button "Create"
    And should be able to see error message "The list name already exists. Please enter a new list name."

    Examples:
      | optionList  |
      | New List    |
      | Copy List   |
      | Import List |



