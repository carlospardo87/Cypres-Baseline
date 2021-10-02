@UI @LP  @R4LA-240
Feature: List Page - Validate Create a New List

  As a user Internal or External, I need to navigate to View All Lists
  and be able to create a new list

  Background:
    Given User navigates to USF with "browser"

  @SmokeTest
  Scenario Outline: "<userType>" user should be able to create a new list
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "<optionList>"
    And should be able to enter list name "List Name Test"
    And should be able to enter list name upto "30" characters
    And should be able to select "<totalListType>" List Type
    And should be able to select List Type "<listType>"
    And should be able to see the "Create" button enabled
    And should be able to close create list modal

    Examples:
      | userType | uname     | password  | optionList  | listType | totalListType |
      | Internal | R4TMID1   | Winter246 | New List    | Public   | 3             |
      | Internal | R4TMID1   | Winter246 | Copy List   | Internal | 3             |
      | Internal | R4TMID1   | Winter246 | Import List | Private  | 3             |
      | External | extuser01 | Welcome22 | New List    | None     | None          |


  @R4LA-433
  Scenario Outline: User should not able to create duplicate list
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "<optionList>"
    And should be able to enter list name "My List"
    And should be able to click on button "Create"
    And should be able to see error message "The list name already exists. Please enter a new list name."

    Examples:
      | optionList  |
      | New List    |
      | Copy List   |
      | Import List |



