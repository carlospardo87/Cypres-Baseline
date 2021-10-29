@UI @ELN @R4LA-504
Feature: List Details page - Validate Drag and Drop Lists

  As a user Internal, I need to be able
  to drag and drop the lists to other group
  and within the same group.

  @SKIP
  Scenario: User should be able to drag and drop a product to a different groups
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "Large List Cypress" and clicks "Edit List" button
    Then should be able to see the header title contain "Large List Cypress"
    When should be able to select "1" items
    Then should be able to drag "1" product and drop on group name "Group1"
    And should be able to see the loading spinner appears with text "Moving items in list"
    And should be able to see "groups" are updated properly



  Scenario: User should be able to drag and drop a product within the same groups
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "Large List Cypress" and clicks "Edit List" button
    Then should be able to see the header title contain "Large List Cypress"
    When should be able to select "1" items
    Then should be able to drag "1" product and drop within the same group
    And should be able to see the loading spinner appears with text "Moving items in list"
    And should be able to see "products" are updated properly





