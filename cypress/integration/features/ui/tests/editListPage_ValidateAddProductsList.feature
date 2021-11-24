@UI @R4LA-472 @LMP
Feature: List Details page - Validate Add Product

  As a user Internal, I navigate to
  List Management page and be able to Add Products
  to the list


  Scenario: User should be able click on "Add Products"
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    And goes to "AutCypressAddProducts" and clicks "Edit List" button
    And should be able to see the header title contain "AutCypressAddProducts"
    Then should be able to click on button "Add Products"
    And should be able to see the proper URL on "Browse Products" page


  Scenario: User should be able to Close(X) modal
    Given "Internal" user navigates to USF and logs in
    When goes to the page "Shop Products"
    And should be able to click on section "Pork"
    And should be able to click on section "Ham, Boneless, Smoked/cured"
    Then should be able to click on "+ Add To List"
    And should be able to select "2" products
    And should be able to see the green footer
    And should be able to see selected "2" products
    And should be able to click on "Choose List"
    And should be able to see the modal "Add to List"
    And should be able to click on "Cancel(X)" button


  Scenario: User should be able to ADD TO LIST on PDP
    Given "Internal" user navigates to USF and logs in
    When goes to the page "Shop Products"
    And should be able to click on section "Pork"
    And should be able to click on section "Ham, Boneless, Smoked/cured"
    Then should be able to click on product card
    And should be able to click button "ADD TO LIST"
    And should be able to see the modal "Add to List"
    And should be able to click on "Cancel(X)" button


  Scenario: User should be able to Submit product to a list
    Given "Internal" user navigates to USF and logs in
    When goes to the page "Shop Products"
    And should be able to click on section "Pork"
    And should be able to click on section "Ham, Boneless, Smoked/cured"
    Then should be able to click on "+ Add To List"
    And should be able to select "2" products
    And should be able to see the green footer
    And should be able to see selected "2" products
    And should be able to click on "Choose List"
    And should be able to see the modal "Add to List"
    And should be able to click on "Choose List" and select "Large List Cypress"
    And should be able to click on "Choose Group" and select "Group1"
    And should be able to click on "Choose Position" and select "Bottom of the Group"
    And should be able to see enabled "Submit"
    And should be able to see the loading spinner appears with text ""
    And should be able to see alert message
    #Create steps to validate API , products should be added if was ok



