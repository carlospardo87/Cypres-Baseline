@UI @ELN @R4LA-474
Feature: List Details page - Validate Drag and Drop Lists

  As a user Internal, I need to be able
  to drag and drop the lists to other group
  and within the same group.

  @BUGFIX
  Scenario: User should be able to drag and drop a product to a different groups
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "Large List Cypress" and clicks "Edit List" button
    And should be able to see the header title contain "Large List Cypress"
    And should be able to click on group "Group1"
    And should be able to select "1" items
    Then should be able to drag "1" product and drop on group name "Group2"
    And should be able to see the loading spinner appears with text ""
    And should be able to see "groups" are updated properly


  Scenario: User should be able to drag and drop a product within the same groups
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"
    When should be able to select "1" items
    Then should be able to drag "1" product and drop within the same group
    And should be able to see the loading spinner appears with text ""
    And should be able to see "products" are updated properly


  Scenario: User should stay on the same page, if the product is dragged and dropped on itself
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"
    When should be able to select "1" items
    Then should be able to drag "1" product and drop on itself
    And should be able to see the proper URL on "List Management" page





