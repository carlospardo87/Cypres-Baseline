@UI @R4LA-103  @LDP
Feature: List Details page - Validate Loading Spinner

  As a user Internal, I need to see a loading
  spinner icon before the lists are loaded
  so that I know the page is still responding.


  Scenario: User should be able to see the spinner icon for loading
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When goes to section "Public" and clicks on list "AutCypressPublic"
    Then should be able to see the loading spinner appears with text "One moment please while we cook up your lists."
