@UI @LMP @R4LA-503
Feature: Edit List Page - Validate Delete Groups Name

  As a user Internal, I need to be able
  to delete groups

  Background:
    #Create a new group by API
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "My List" and clicks "Edit List" button

  Scenario: Scenario Outline: User should be able to delete group without products
    #And should be able to add a group to the bottom of the groups
    #And enters a new group name "New Group"
    #And should be able to see green checkmark circle enabled
    #And should be able to click on "green" checkmark circle
    And should be able to click on group "2" and "Delete Group"
    And should be able to see the "Delete Group" modal
    And should be able to select option "Delete the group and all products in it. "
    And should be able to click on "Continue" button
    And should be able to see the loading spinner appears with text ""
    #And should not be able to see the group "2"
    #Verify that group "2" is removed by API

      #| Delete the group and move the products to the Unassigned group. |
