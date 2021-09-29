@UI @R4LA-174  @LP  @SKIP
Feature: Lists Page - Validate Action Elements

  As a user Internal or External I need to navigate to My List Page
  and check that I am able to interact with
  the available elements

  Background:
    Given User navigates to USF with "browser"

  Scenario: User should be able to see all the action elements
    When "Internal" user logs in with valid credentials "R4TMID1" and "Winter246"
    And clicks on My Lists button
    #And should be able to see the loading spinner with text "One moment please while we cook up your lists."
    Then lists page URL should contain "/lists"
    And should be able to see the title contain "View All Lists"
    And should be able to see button Create Order
    And should be able to see button My Lists
    And should be able to see button Search Box and icon magnifier
    And should be able to see Create a New List button
    And should be able to see the customer drop down "84134436"
    And should be able to see customer verification icon



