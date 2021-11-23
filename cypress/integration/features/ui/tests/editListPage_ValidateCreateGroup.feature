@UI @R4LA-305 @ELP
Feature: Edit List Page - Validate Create Group

  As a user Internal, I need to navigate to Edit List page
  and be able to create groups

  Background:
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button

  Scenario: User should not enter duplicate group name
    And should be able to add a group to the bottom of the groups
    When enters a new group name "Unassigned Group"
    And should be able to click on "green" checkmark circle
    Then should be able to see error "This group name already exists.  Please enter a new group name."

  @SmokeTest
  Scenario: User should enter correct group name
    And should be able to add a group to the bottom of the groups
    When enters a new group name "New Group"
    Then should be able to see green checkmark circle enabled

  Scenario: User should be able to close the group edition
    And should be able to add a group to the bottom of the groups
    When enters a new group name "New Group"
    Then should be able to see red close circle enabled
    And should be able to click on "red" checkmark circle