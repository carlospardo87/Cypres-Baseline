@UI @ELG @R4LA-599
Feature: Edit List Page - Validate Delete Products

  As a user Internal, I need to be able
  to delete products and check alert message.

  @BUGFIX
  Scenario: User should be to delete a product a check alert message
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "Large List Cypress" and clicks "Edit List" button
    Then should be able to see the header title contain "Large List Cypress"
    And should be able to click on group "Group2"
    And should be able to select "2" items
    And should be able to click on option "Delete"
    And should be able to select Group "2" and Submit
    And should be able to see the loading spinner appears with text ""
    And should be able to see alert message "Delete Products"

