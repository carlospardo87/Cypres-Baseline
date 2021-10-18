@UI @R4LA-175 @LP
Feature: List Page - Validate Available Sections

  As a user Internal/External I need to navigate to
  View All Lists Page and verify that I am able to see all the
  available sections

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see the available section
    When logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    Then "<userType>" should be able to see each section name
    And should be able to see column description per section
    And should be able to see list description per section

    Examples:
      | userType | uname     | password  |
      | Internal | R4TMID4   | Welcome20  |
      | External | extuser01 | Welcome22 |


  Scenario Outline: User should be able to see "There are no lists to show" on empty Lists
    When logs in with valid credentials "<uname>" and "<password>"
    And goes to dropdown and selects customer "<customerNro>" and click My Lists button
    And should be able to see in each section "There are no lists to show"

    Examples:
      | uname     | password  | customerNro |
      #| R4TMID4   | Welcome20 | 91150102    |
      | extuser01 | Welcome22 | 91371773    |



