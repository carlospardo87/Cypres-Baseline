@UI @R4LA-373  @BN
Feature: Banner advertising - Validate Banner advertising

  As a user Internal or External, I need to be able
  see the banner at the top of the page

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see the banner at the top of the page
    When "Internal" user logs in with valid credentials "R4TMID3" and "Winter246"
    And goes to the page "<namePage>"
    Then should be able to see the banner at the top of the page
    #And should be able to see the ellipsis on the button

    Examples:
      | namePage        |
      | Detail List     |
      | Management List |
