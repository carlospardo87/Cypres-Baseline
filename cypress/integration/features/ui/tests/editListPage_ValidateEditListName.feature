@UI @ELN @R4LA-545
Feature: Edit List Name - Validate List Name can be changed

  As a user Internal, I need to be able
  to edit the list name


 # Scenario: User should able to see error message if the list name (case insensitive) entered already exists.
   # Given "Internal" user navigates to USF and logs in
   # When clicks on My Lists button
   # And goes to "AutCypressPublic" and clicks "Edit List" button
   # Then should be able to see the header title contain "AutCypressPublic"
   # And should be able to dropdown the ellipsis menu and click on option "Edit List Name"
   # And should be able to see the "Edit List Name" modal
   # And should be able to enter list name ,click Submit and see list name error 'The list name already exists. Please enter a new list name.'
   #   | newListName      |
  #| AutCypressPublic |
  #| AUTCYPRESSPUBLIC |
  #| autcypresspublic |
   # And should be able close the modal
   # And should be able to see the header title contain "AutCypressPublic"

  @BUGFIX
  Scenario: User should able to edit a new list name if the list name entered does not exists.
    Given "External" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressExternal" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressExternal"
    And should be able to dropdown the ellipsis menu and click on option "Edit List Name"
    And should be able to see the "Edit List Name" modal
    And should be able to enter list name "NewListCypress" and click Submit button
    Then should be able to see the loading spinner appears with text "Changing list name"
    And should be able to see the header title contain "NewListCypress"
    And should be able to revert the changes on "Edit List Name" with the previous name "AutCypressExternal"
    And should be able to click on the Submit button and close the modal
    And should be able to see the header title contain "AutCypressExternal"


