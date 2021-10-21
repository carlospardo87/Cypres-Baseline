@UI @ELN @R4LA-504
Feature: Delete Lists - Validate Delete Lists

  As a user Internal, I need to be able
  to Delete, Cancel and Close List operation
  on Edit List page

  @BUGFIX
  Scenario: User should be able to "Delete" list on View All Lists page
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    And clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to enter list name "AutCypressPublicTestDelete"
    And should be able to click "Create" button
    And goes to the page "View All Lists"
    And goes to "AutCypressPublicTestDelete" and clicks "Delete" button
    And should be able to see the "Delete List" modal
    And should be able to click on "YES" button
    And should not able to see "AutCypressPublicTestDelete" on View All List page


  @BUGFIX
  Scenario: User should be able to click on 'YES' button and delete list
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    And clicks on button "Create A New List"
    Then should be able to see create lists modal
    And should be able to enter list name "AutCypressPublicTestDelete"
    And should be able to click "Create" button
    And goes to "AutCypressPublicTestDelete" and clicks "Edit List" button
    And should be able to see the header title contain "AutCypressPublicTestDelete"
    And should be able to dropdown the ellipsis menu and click on option "Delete List"
    And should be able to see the "Delete List" modal
    And should be able to click on "YES" button
    And should not able to see "AutCypressPublicTestDelete" on View All List page


  Scenario Outline: User should be able to click on "<buttonName>" button
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"
    And should be able to dropdown the ellipsis menu and click on option "Delete List"
    And should be able to see the "Delete List" modal
    And should be able to see the proper list name "AutCypressPublic" to delete
    And should be able to click on "<buttonName>" button
    And should be able to see the header title contain "AutCypressPublic"
    Examples:
      | buttonName |
      | Cancel(X)  |
      | NO |





