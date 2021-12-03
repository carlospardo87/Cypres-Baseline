@UI @R4LA-174  @LP
Feature: Lists Page - Validate Elements Search, Customers dropdown and Buttons

  As a user Internal I need to navigate to View All Lists Page
  and verify that I am able to interact with
  the available action elements and search bar

  Background:
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button

  Scenario: User should be able to see all the action elements
    Then lists page URL should contain "/lists"
    And should be able to see the title contain "View All Lists"
    And should be able to see button Create Order
    And should be able to see button My Lists
    And should be able to see button Search Box and icon magnifier
    And should be able to see Create a New List button
    And should be able to see the customer drop down "34229328"
    And should be able to see customer verification icon


  Scenario: User filters a list that exists
    And should be able to enter text "AutCypressPub" in search box and filter lists
    And should be able to see list filtered that contains text "AutCypressPub"

  Scenario: User cleans text using clean icon "x"
     And should be able to enter text "QaAutomation" in search box and filter lists
     And should be able to use the icon "x" to clean the text

  Scenario: User filters a list that does not exist
    And should be able to enter text "QaAutomation" in search box and filter lists
    Then should be able to see in each section "There are no lists for the current customer."


