@UI @R4LA-287  @LP
Feature: List Page - Validate editing of lists

  As a user Internal or External, I need to be able
  to edit list on My List Page

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to edit the lists
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    And  goes to section "<sectionName>" and edits the first list
    Then should be able to see the popup options menu
    And should be able to see the list items contains "Edit List,Copy,Share,Download,Print,Delete"

    Examples:
      | userType | uname       | password    | sectionName       |
      | Internal | tmid2       | Welcome12   | Public            |
      | External | prodsupp101 | today123    | My Shopping Lists |


  Scenario Outline: User should be able to edit the lists
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And  clicks on My Lists button
    And  goes to section "<sectionName>" and edits the first list
    Then should be able to see the popup options menu
    And should be able to click on "Edit List" option
    And should be able to see the header title contain "RESEQUENCETEST"
    Then should be able to see the proper URL on "!!!!!RESEQUENCETEST" details page

    Examples:
      | userType | uname       | password    | sectionName       |
      | Internal | tmid2       | Welcome12   | Public            |
      | External | prodsupp101 | today123    | My Shopping Lists |
