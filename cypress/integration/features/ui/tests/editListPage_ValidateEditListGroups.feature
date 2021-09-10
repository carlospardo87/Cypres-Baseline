@UI @ELG
Feature: Edit List Page - Validate List Groups And Product Selected Modal

  As a user Internal or External, I need to be able
  to edit lists, move, copy and delete

  Background:
    Given User navigates to USF with "browser"
    When "Internal" user logs in with valid credentials "R4TMID3" and "Winter246"
    And goes to dropdown and selects customer "24163578"
    And clicks on My Lists button
    Then should be able to see the loading spinner with text "One moment please while we cook up your lists."
    And goes to "AutCypressPublic_100" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic_100"

  @R4LA-329
  Scenario: User should be able to select/unselect and to navigate through the groups
    And should be able to check and uncheck the radio element
    And should be able to navigate through the groups

  @R4LA-363
  Scenario: User should be able to select multiple items and see green footer options
    Then should be able to select "2" items
    And should be able to see the green footer if 1 or more product are selected
    And should be able to see "2" Products Selected
    And should be able to see other options "Deselect All,Move,Copy,Delete"

  @R4LA-363
  Scenario Outline: User should be able to select "<optNames>" option and view selected products
    Then should be able to select "2" items
    And should be able to click on option "<optNames>"
    And should be able to see "<optNames>" modal
    And should be able to see: Where do you want to "<optNames>" this product?
    And should be able to click on item "View Selected Products (2)"
    And should be able to see "2" products selected

    Examples:
      | optNames |
      | Move   |
      | Copy   |
      | Delete |

  @R4LA-363
  Scenario Outline: User should be able to select "<optNames>" check button enable/disable
    Then should be able to select "2" items
    And should be able to click on option "<optNames>"
    And should be able to see button "<optNames>" disabled
    And should be able to select where do you want to "<optNames>" this product?
    And should be able to see button "<optNames>" enabled
    And should be able to "<opt>" button "Select All"
    And should be able to "<opt>" button "Deselect All"


    Examples:
      | optNames | opt      |
      | Move     | not see  |
      | Copy     | click on |
      | Delete   | click on |






