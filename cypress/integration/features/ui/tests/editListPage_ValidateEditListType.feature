@UI @ELN @R4LA-546
Feature: Edit List Name - Validate List Type can be changed

  As a user Internal/External , I need to be able
  to edit the list type

  Background:
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "TMID2" and "Welcome12"
    And goes to dropdown and selects customer "702738" and click My Lists button


  Scenario: User should not able to switch Public lists
    And goes to "#1AutoPb210818_230051" and clicks "Edit List" button
    Then should be able to see the header title contain "#1AutoPb210818_230051"
    And should be able to see the edit options list
      | dropdownOptions |
      | Edit List Name  |
      | Delete List     |



  Scenario: User should able to switch to Internal lists to Public or Private
    And goes to "#1AutoIn210827_133508" and clicks "Edit List" button
    Then should be able to see the header title contain "#1AutoIn210827_133508"
    And should be able to see the edit options list
      | dropdownOptions     |
      | Set list as private |
      | Set list as public  |
      | Edit List Name      |
      | Delete List         |


  Scenario: User should able to switch to Private lists to Internal
    And goes to "#1AutoPr210818_230326" and clicks "Edit List" button
    Then should be able to see the header title contain "#1AutoPr210818_230326"
    And should be able to see the edit options list
      | dropdownOptions      |
      | Set list as internal |
      | Edit List Name       |
      | Delete List          |


