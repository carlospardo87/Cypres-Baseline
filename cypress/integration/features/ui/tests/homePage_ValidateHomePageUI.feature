@UI @R4LA-460 @HP
Feature: Home Page - Validate UI Elements

  As a user Internal, I need to navigate to
  Home Page and see the proper elements displayed

  Scenario: User should be able to see Home Page elements
    Given "Internal" user navigates to USF and logs in
    Then should be able to see the proper URL on "Home Page" page
    Then should be able to see a banner with text "HELPING YOU MAKE IT"
    And should be able to see "My List", "Browse", and "Deliveries" cards
    And should be able to see a banner at the end of the page
