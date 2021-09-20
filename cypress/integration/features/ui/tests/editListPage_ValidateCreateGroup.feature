@UI @R4LA-305 @ELP
Feature: List Page - Validate Create Group

  As a user Internal or External, I need to navigate to Edit List page
  and be able to create groups

  Background:
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "r4tmid1" and "Winter246"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And goes to "Shelftosheet2020" and clicks "Edit List" button

  Scenario: Enter a duplicated group name
    And should be able to add a group to the bottom of the groups
    When enters a new group name "Unassigned Group"
    And should be able to click on green checkmark circle
    Then should be able to see error "This group name already exists.  Please enter a new group name."

  @SmokeTest
  Scenario: Enter a correct group name
    And should be able to add a group to the bottom of the groups
    When enters a new group name "New Group"
    Then should be able to see green checkmark circle enabled


  Scenario: Close a new group
    And should be able to add a group to the bottom of the groups
    When enters a new group name "New Group"
    Then should be able to see red close circle enabled