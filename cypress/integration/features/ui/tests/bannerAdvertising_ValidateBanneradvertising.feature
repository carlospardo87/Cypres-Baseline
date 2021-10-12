@UI @R4LA-256  @BN  @SKIP
Feature: Banner advertising - Validate Banner advertising

  As a user Internal, I need to navigate to List Details Page and
  List Management Page, and be able
  see the banner and ellipsis menu at the top of the page


  Scenario Outline: User should be able to see the banner at the top of the page
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And goes to the page "<namePage>"
    Then should be able to see the banner at the top of the page
    And should be able to see the ellipsis on the banner right

    Examples:
      | namePage        |
      | Detail List     |
      | Management List |
