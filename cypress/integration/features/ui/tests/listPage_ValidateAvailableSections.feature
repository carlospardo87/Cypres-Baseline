@UI @R4LA-175 @LP
Feature: List Page - Validate Available Sections

  As a user Internal/External I need to navigate to
  View All Lists Page and verify that I am able to see all the
  available sections

  Scenario: Internal user should be able to see the available section
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    Then "Internal" should be able to see each section name
    And should be able to see column description per section
    And should be able to see list description per section


  Scenario: External user should be able to see the available section
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    Then "External" should be able to see each section name
    And should be able to see column description per section
    And should be able to see list description per section


  Scenario: User should be able to see "There are no lists to show" on empty Lists
    Given "Internal" user navigates to USF and logs in with "R4TMID5" and "Welcome20"
    And goes to dropdown and selects customer "54139423" and click My Lists button
    Then should be able to see in each section "There are no lists to show"




