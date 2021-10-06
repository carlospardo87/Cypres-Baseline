@UI @ELN @R4LA-545
Feature: Edit List Name - Validate List Name can be changed

  As a user Internal/External , I need to be able
  to edit the list name

  Background:
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "extuser01" and "Welcome22"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And goes to "KB List" and clicks "Edit List" button
    Then should be able to see the header title contain "KB List"


  Scenario Outline: User should able to see error message if the list name (case insensitive) entered already exists.
    And should be able to dropdown the ellipsis menu and click on option "<optionMenu>"
    And should be able to see the "Edit List Name" modal, and enter a new list name "<newListName>"
    And should be able to click on the Submit button
    And should be able to see list name error 'The list name already exists. Please enter a new list name.'
    And should be able close the modal
    And should be able to see the header title contain "<newListName>"

    Examples:
      | optionMenu     | newListName |
      | Edit List Name | KB LIST     |
      | Edit List Name | kb list     |


  Scenario Outline: User should able to edit a new list name if the list name entered does not exists.
    And should be able to dropdown the ellipsis menu and click on option "<optionMenu>"
    And should be able to see the "Edit List Name" modal, and enter a new list name "<newListName>"
    And should be able to click on the Submit button
    And should be able to see the header title contain "<newListName>"
    And should be able to revert the changes on "Edit List Name" with the previous name "<revertListName>"
    And should be able to click on the Submit button and close the modal
    And should be able to see the header title contain "<revertListName>"

    Examples:
      | optionMenu     | newListName    | revertListName |
      | Edit List Name | NewListCypress | KB List        |

