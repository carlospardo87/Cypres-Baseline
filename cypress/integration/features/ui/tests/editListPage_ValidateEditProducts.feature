@UI @ELG @R4LA-293
Feature: Edit List Page - Validate Edit Products

  As a user Internal, I need to be able
  to edit, move, copy and delete products

  Background:
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"

  @R4LA-329  @SmokeTest
  Scenario: User should be able to select/unselect and to navigate through the groups
    And should be able to check and uncheck the radio element
    And should be able to navigate through the groups

  @R4LA-363
  Scenario: User should be able to select multiple items and see green footer options
    Then should be able to select "5" items
    And should be able to see the green footer if 1 or more product are selected
    And should be able to see "5" Products Selected
    And should be able to see other options "Deselect All,Move,Copy,Delete"


  @R4LA-363
  Scenario Outline: User should be able to select "<optNames>" option and view selected products
    Then should be able to select "2" items
    And should be able to click on option "<optNames>"
    And should be able to see "<optNames>" modal
    And should be able to see: Where do you want to "<optNames>" this product?
    And should be able to click on item "View Selected Products"
    And should be able to see "2" products selected

    Examples:
      | optNames |
      | Move     |
      | Copy     |
      | Delete   |

  @R4LA-363  @SmokeTest
  Scenario Outline: User should be able to select "<optNames>" check button enable/disable
    Then should be able to select "2" items
    And should be able to click on option "<optNames>"
    And should be able to select where do you want to "<optNames>" this product?
    And should be able to see button "<optNames>" enabled

    Examples:
      | optNames |
      | Move     |
      | Copy     |
      #| Delete   |





