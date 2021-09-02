@UI @R4LA-174  @LP
Feature: Lists Page - Validate Action Elements

  As a user Internal or External I need to navigate to My List Page
  and check that I am able to interact with
  the available elements

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see all the action elements
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button
    And should be able to see the loading spinner with text "One moment please while we cook up your lists."
    Then lists page URL should contain "/lists"
    And should be able to see the title contain "View All Lists"
    And should be able to see button Create Order
    And should be able to see button Create Order My Lists
    And should be able to see button Search Box and icon magnifier
    And should be able to see Create a New List button
    And should be able to see the customer drop down "<customerNro>"
    And should be able to see customer verification icon

    Examples:
      | userType | uname | password  | customerNro |
      | Internal | tmid3 | Welcome12 | 702738      |
      #| External | prodsupp101 |   today123      | 702738       |


