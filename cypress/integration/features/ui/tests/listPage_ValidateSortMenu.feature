@UI @R4LA-45 @LP
Feature: List Page - Validate Sort Menu Icon

  As a user Internal I need to navigate to View All Lists Page
  and check that I am able to sort the list

  Scenario: User should be able to sort the list menu
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And should be able to sort the lists by "List Name"
    And should be able to sort the lists by "Last Updated By"
    And should be able to sort the lists by "Products"
    And should be able to sort the lists by "Discontinued"
