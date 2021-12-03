@UI @ELG @R4LA-579
Feature: Edit List Page - Validate Edit/Delete Groups Name

  As a user Internal, I need to be able
  to edit name and delete groups

  Background:
    Given "Internal" user navigates to USF and logs in
    When goes to dropdown and selects customer "91150102" and click My Lists button
    And goes to "AutCypressEditGroupList" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressEditGroupList"



  Scenario: User should be able to see error message if the list name (case insensitive) entered already exists.
    And should be able to click on group "2" and "Edit Group Name"
    And should be able to see the "Edit Group Name" modal
    And should be able to enter list name ,click Submit and see list name error 'The group name already exists. Please enter a new group name.'
      | newListName |
      | Grp2 |
      | grp2 |
      | GRP2 |


  Scenario: User should be able to Edit group name - checking API
    And should be able to click on group "3" and "Edit Group Name"
    And should be able to see the "Edit Group Name" modal
    And should be able to enter "group" name "Grp2" and click Submit button
    And authorization token was requested
    And refresh token was requested with customer: "91150102" and division: "2160"
    And requesting all lists groups API
    Then "ListGroups" response should contain status "200"
    And "ListGroups" response body should be contain group name "Grp2"



  Scenario Outline: User should not be able to "<deleteOption>"
    And should be able to click on group "4" and "Delete Group"
    And should be able to see the "Delete Group" modal
    And should be able to select option "<deleteOption>"
    Examples:
      | deleteOption                                                    |
      | Delete the group and all products in it.                        |
      | Delete the group and move the products to the Unassigned group. |


  Scenario Outline: User should not be able to "<buttonName>" operation
    And should be able to click on group "4" and "Delete Group"
    And should be able to see the "Delete Group" modal
    And should be able to select option "Delete the group and all products in it."
    And should be able to click on "<buttonName>" button
    Examples:
      | buttonName |
      | Cancel(X) |
      | Cancel |








