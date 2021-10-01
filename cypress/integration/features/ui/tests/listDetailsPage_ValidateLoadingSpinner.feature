@UI @R4LA-103  @LDP
Feature: List Details page - Validate Loading Spinner

  As a user Internal, I need to see a loading
  spinner icon before the lists are loaded
  so that I know the page is still responding.


  Scenario: User should be able to see the spinner icon for loading
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "AutCypressPublic_100"
    Then should be able to see the loading spinner appears with text "One moment please while we cook up your lists."
