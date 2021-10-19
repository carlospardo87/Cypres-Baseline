@UI @ELN @R4LA-546
Feature: Edit List Name - Validate List Type can be changed

  As a user Internal, I need to be able
  to edit the list type

  Background:
    Given "Internal" user navigates to USF and logs in
    And goes to dropdown and selects customer "91150102" and click My Lists button


  Scenario: User should not able to switch Public lists
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"
    And should be able to see the edit options list
      | dropdownOptions |
      | Edit List Name  |
      | Delete List     |
    And option list should contains "2" items



  Scenario: User should able to switch to Internal lists to Public or Private
    And goes to "AutCypressInternal" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressInternal"
    And should be able to see the edit options list
      | dropdownOptions     |
      | Set list as private |
      | Set list as public  |
      | Edit List Name      |
      | Delete List         |
    And option list should contains "4" items


  Scenario: User should able to switch to Private lists to Internal
    And goes to "AutCypressPrivate" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPrivate"
    And should be able to see the edit options list
      | dropdownOptions      |
      | Set list as internal |
      | Edit List Name       |
      | Delete List          |
    And option list should contains "3" items


