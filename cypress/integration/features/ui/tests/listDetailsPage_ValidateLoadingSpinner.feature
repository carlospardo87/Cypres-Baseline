@UI @R4LA-103  @LDP  @SKIP
Feature: List Details page - Validate Loading Spinner

  As a user Internal or External
  I want to see a loading spinner icon before the lists are loaded
  so that I know the page is still responding.

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to see the spinner icon for loading
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    When goes to section "Public" and clicks on list "AutCypressPublic01"
    Then should be able to see the loading spinner appears with text "One moment please while we cook up your lists."
