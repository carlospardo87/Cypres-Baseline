@UI @ELN @R4LA-545
Feature: Edit List Name - Validate List Name can be changed

  As a user Internal/External , I need to be able
  to edit the list name

  Background:
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "extuser01" and "Welcome22"
    And clicks on My Lists button
    And goes to "KB List" and clicks "Edit List" button
    Then should be able to see the header title contain "KB List"


  Scenario: User should able to see error message if the list name (case insensitive) entered already exists.
    And should be able to dropdown the ellipsis menu and click on option "Edit List Name"
    And should be able to see the "Edit List Name" modal
    And should be able to enter list name ,click Submit and see list name error 'The list name already exists. Please enter a new list name.'
      | newListName |
      | Kb List     |
      | KB LIST     |
      | kb list     |
    And should be able close the modal
    And should be able to see the header title contain "KB LIST"


  @BUGFIX
  Scenario: User should able to edit a new list name if the list name entered does not exists.
    And should be able to dropdown the ellipsis menu and click on option "Edit List Name"
    And should be able to enter list name "NewListCypress" and click Submit button
    And should be able to see the header title contain "NewListCypress"
    And should be able to revert the changes on "Edit List Name" with the previous name "KB List"
    And should be able to click on the Submit button and close the modal
    And should be able to see the header title contain "KB List"


