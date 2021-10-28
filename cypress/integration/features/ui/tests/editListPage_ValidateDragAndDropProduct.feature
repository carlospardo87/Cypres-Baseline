@UI @ELN @R4LA-504  @BUGFIX
Feature: List Details page - Validate Drag and Drop Lists

  As a user Internal, I need to be able
  to drag and drop the lists to other groups

  Scenario: User should be able to drag and drop the lists
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "ListCypress" and clicks "Edit List" button
    Then should be able to see the header title contain "ListCypress"
    When should be able to select "1" items
    Then should be able to drag "1" product and drop on group name "Unassigned"
    And should be able to see the loading spinner appears with text "Moving items in list"
    And should be able to see groups are updated properly

