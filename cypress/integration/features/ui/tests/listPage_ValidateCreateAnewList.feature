@UI @R4LA-311 @LP
Feature: List Page - Validate Create a New List

  As a user Internal or External, I need to navigate to View All List
  and be able to create a new list

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: Internal user should be able to create a new list
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "<optionList>"
    And should be able to enter list name "List Name Test"
    And should be able to select List Type "<listType>"
    And should be able to see the "Create" button enabled
    And should be able to close create list modal

    Examples:
      | userType | uname       | password  | optionList     |listType |
      | Internal | R4TMID3     | Winter246 | New List       |Public   |
      | Internal | R4TMID3     | Winter246 | Copy List      |Internal |
      | Internal | R4TMID3     | Winter246 | Import List    |Private  |



  Scenario Outline: External User should be able to create a new list
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to select your option "<optionList>"
    And should be able to enter list name "List Name Test"
    And should be able to see the "Create" button enabled
    And should be able to close create list modal

    Examples:
      | userType | uname       | password  | optionList     |
      | External | prodsupp101 | today123  | New List       |
      | External | prodsupp101 | today123  | Copy List      |
      | External | prodsupp101 | today123  | Import List    |

