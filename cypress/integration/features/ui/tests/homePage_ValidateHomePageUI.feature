@UI @R4LA-460 @HP
Feature: Home Page - Validate UI Elements

  As a user Internal, I need to navigate to
  Home Page and see the proper elements displayed

  Scenario: User should be able to see Home Page elements
    Given "Internal" user navigates to USF and logs in
    Then should be able to see the proper URL on "Home Page" page
    And should be able to see a banner with text "HELPING YOU MAKE IT"
    And should be able to see the navigation cards
      | navCards   |
      | My Lists   |
      | Browse     |
      | Deliveries |
    And should be able to see a banner at the end of the page


  Scenario Outline: User should be able click on Deliveries card
    Given "Internal" user navigates to USF and logs in
    Then should be able to see the proper URL on "Home Page" page
    When user clicks on "<cardName>" card
    Then should be able to see the proper URL on "<pageName>" page

    Examples:
      | cardName   | pageName  |
      | Deliveries | My Orders |
      #| MY LISTS   | My Lists  |   Not implemented yet
      #| BROWSE     | --        |   Not implemented yet