@UI @R4LA-55 @LDP @SmokeTest
Feature: List Details page - Validate Quantity Boxes and group sorted ascending

  As a user Internal, I need to navigate to
  List Product Details page and verify quantity boxes
  and navigation and group sorted ascending

  Background:
    Given "Internal" user navigates to USF and logs in
    When goes to the page "Current Order"
    And clicks on button "Cancel" order


  Scenario: User should be able to see navigate to PDP and see the card product item
    #Given goes to the page "Detail List"
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When goes to section "Public" and clicks on list "AutCypressPublic"
    And should be able to enter a total of products "100"
    And should be able to see "100" products in the cart on "List Details" page
    And should be able to click the product card
    And should be able to see product number into the URL
    And should be able to see "100" products in the cart on "Product Details" page


  Scenario: User should be able to see Order Information is displayed properly
    #Given goes to the page "Detail List"
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When goes to section "Public" and clicks on list "AutCypressPublic"
    And should be able to enter a total of products "10"
    And should be able to see the correct Order Total for "10" products
    And should be able to see "10" total Cases in total order section


  Scenario: User should be able to see the group of list is sorted ascending
    #Given goes to the page "Detail List"
    Given "Internal" user navigates to USF and logs in
    When clicks on My Lists button
    When goes to section "Public" and clicks on list "AutCypressPublic"
    And should be able to see the group of list is ascending


