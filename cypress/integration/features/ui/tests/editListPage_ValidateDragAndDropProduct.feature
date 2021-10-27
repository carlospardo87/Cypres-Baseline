@UI @ELN @R4LA-504
Feature: Delete Lists - Validate Delete Lists

  As a user Internal, I need to be able
  to Delete, Cancel and Close List operation
  on Edit List page

  Scenario: User should be able to click on "<buttonName>" button
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "ListCypress" and clicks "Edit List" button
    Then should be able to see the header title contain "ListCypress"
    When should be able to select "1" items
    Then should be able to drag "1" product and drop on group name "Unassigned"
