@UI @LMP @R4LA-503
Feature: Edit List Page - Validate Delete Groups Name

  As a user Internal, I need to be able
  to delete groups checking API

  Background:
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressDeleteGroup" and clicks "Edit List" button

  Scenario: Scenario Outline: User should be able to delete group without products
    And should be able to click on group "2" and "Delete Group"
    And should be able to see the "Delete Group" modal
    And should be able to select option "Delete the group and all products in it. "
    And should be able to click on "Continue" button
    And should be able to see the loading spinner appears with text ""
    And authorization token was requested
    And requesting ListGroup API
    Then "ListGroups" response should contain status "200"
    And "ListGroups" response body should not include deleted group

