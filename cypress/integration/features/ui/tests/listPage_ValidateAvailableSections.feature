@UI @R4LA-175 @LP
Feature: List Page - Validate Available Sections

  As a user Internal or External I need to navigate to
  View All Lists Page and verify that I am able to see all the
  available sections

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: "<userType>" user should be able to see the available section
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then should be able to see the loading spinner
    Then "<userType>" should be able to see each section name
    And should be able to see column description per section
    And should be able to see list description per section

    Examples:
      | userType | uname     | password  |
      | Internal | R4TMID1   | Winter246 |
      | External | extuser01 | Welcome22 |


  Scenario Outline: "<userType>" user should be able to see "There are no lists to show" on empty Lists
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And goes to dropdown and selects customer "<customerNro>"
    And clicks on My Lists button
    Then should be able to see the loading spinner
    And should be able to see in each section "There are no lists to show"

    Examples:
      | userType | uname     | password  | customerNro |
      | Internal | R4TMID1   | Winter246 | 91150102    |
      | External | extuser01 | Welcome22 | 91371773    |



