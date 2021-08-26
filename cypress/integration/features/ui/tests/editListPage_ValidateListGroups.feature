@UI @R4LA-329  @ELP
Feature: Edit List Page - Validate List Groups

  As a user Internal or External, I need to be able
  to edit lists

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to edit the lists
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And goes to URL "/desktop/lists/management/SL-1016246"
    Then should be able to see the header title contain "AUTCYPRESSPUBLIC01"
    And should be able to check and uncheck the radio element
    And should be able to navigate through the groups

    Examples:
      | userType | uname   | password  |
      | Internal | R4TMID3 | Winter246 |
      #| External | prodsupp101 | today123  |


