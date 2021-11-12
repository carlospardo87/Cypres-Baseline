@UI @ELN @R4LA-545
Feature: Edit List Name - Validate List Name can be changed

  As a user Internal, I need to be able
  to edit the list name


 Scenario: User should able to see error message if the list name (case insensitive) entered already exists.
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"
    And should be able to dropdown the ellipsis menu and click on option "Edit List Name"
    And should be able to see the "Edit List Name" modal
    And should be able to enter list name ,click Submit and see list name error 'The list name already exists. Please enter a new list name.'
      | newListName      |
      | AutCypressPublic |
      | AUTCYPRESSPUBLIC |
      | autcypresspublic |
   And should be able close the modal
   And should be able to see the header title contain "AutCypressPublic"


  Scenario: User should be able to "Edit List Name"
    Given "Internal" user navigates to USF and logs in
    When goes to dropdown and selects customer "91150102" and click My Lists button
    And goes to "NewListName" and clicks "Edit List" button
    Then should be able to dropdown the ellipsis menu and click on option "Edit List Name"
    And should be able to see the "Edit List Name" modal
    And should be able to enter "list" name "NewListName" and click Submit button
    And authorization token was requested
    And refresh token was requested with customer: "91150102" and division: "2160"
    When requesting all lists API
    Then "Lists" response should contain status "200"
    And "Lists" response body should be contain list name "NewListName"




