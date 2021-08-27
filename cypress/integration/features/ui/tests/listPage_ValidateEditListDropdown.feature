@UI @R4LA-287  @LP
Feature: List Page - Validate Edit List Dropdown

  As a user Internal or External, I need to be able
  to edit list on My List Page

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to edit the lists
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And  goes to list "Public" and clicks menu options
    And should be able to see the popup options menu
    And should be able to see the list items contains "Edit List,Copy,Share,Download,Print,Delete"
    And should be able to click on "Edit List" option
    Then should be able to see the proper URL on "List Management" page

    Examples:
      | userType | uname   | password  |
      | Internal | R4TMID3 | Winter246 |
      #| External | prodsupp101 | today123    | My Shopping Lists |



