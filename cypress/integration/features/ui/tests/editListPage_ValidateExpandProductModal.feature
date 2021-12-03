@UI @LMP @R4LA-664
Feature: Edit List Name - Validate Modal Quick View

  As a user Internal, I need to be able
  see Quick View Modal with the product information

  Background:
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressPublic" and clicks "Edit List" button
    Then should be able to see the header title contain "AutCypressPublic"
    And should be able to dropdown the ellipsis menu and click on option "Quick View"

  Scenario: User expand product view and go to Add to List
    And should be able to see the "Quick View" modal
    And should be able to click on button "Add To List"
    And should be able to see the modal "Add To List"
    And should be able to click on "Cancel(X)" button

  Scenario: User expand product view and enters product notes
    And should be able to see the "Quick View" modal
    And should be able to enter product notes

  Scenario: User expand product view and click on text link "Visit Product Page for More Details"
    And should be able to see the "Quick View" modal
    And should be able to click on text link "Visit Product Page for More Details"
    And should be able to see product detail page

  Scenario: User expand product view and verify texts
    And should be able to see the "Quick View" modal
    And should be able to see product card description
    And should be able to see product card order number
    And should be able to see product card price
    And should be able to enter "100" on quantity box
