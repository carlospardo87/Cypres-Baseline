@UI @R4LA-175 @LP @SKIP
Feature: List Page - Validate Available Sections

  As a user Internal or External I need to navigate to My List Page
  and check that I am able to interact all the
  available sections

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see the available section
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And goes to dropdown and selects customer "74059163"
    And clicks on My Lists button
    Then should be able to see the loading spinner
    Then "<userType>" should be able to see each section name
    And should be able to see column description per section
    And should be able to see list description per section

    Examples:
      | userType | uname   | password  |
      | Internal | R4TMID1 | Winter246 |
      #| External |prodsupp101 |   today123     |


  Scenario Outline: User should be able to see "There are no lists to show" on empty Lists
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And goes to dropdown and selects customer "74059163"
    And clicks on My Lists button
    Then should be able to see the loading spinner
    Then should be able to see in each section "There are no lists to show"

    Examples:
      | userType | uname   | password  |
      | Internal | R4TMID1 | Winter246 |
      #| External |prodsupp101 |   today123 |



