@UI @ELN @R4LA-504
Feature: Delete Lists - Validate Delete Lists

  As a user Internal, I need to be able
  to Delete, Cancel and Close List operation
  on Edit List page

  @BUGFIX
  Scenario: User should be able to "Delete" list on View All Lists page
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    And should create a list "CypressListToDelete" if not exist
    And goes to "CypressListToDelete" and clicks "Delete" button
    And should be able to see the "Delete List" modal
    And should be able to click on "YES" button
    Then should not able to see "CypressListToDelete" on View All List page
    #And should be able to see alert message "Delete List"

  @BUGFIX
  Scenario: User should be able to click on 'YES' button and delete list
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    And should create a list "CypressListToDelete" if not exist
    And goes to "CypressListToDelete" and clicks "Edit List" button
    And should be able to see the header title contain "CypressListToDelete"
    And should be able to dropdown the ellipsis menu and click on option "Delete List"
    And should be able to see the "Delete List" modal
    And should be able to click on "YES" button
    And should not able to see "CypressListToDelete" on View All List page
    #And should be able to see alert message "Delete Lists"   // This list cannot be edited at this time, please try again later.


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





