@UI @R4LA-460 @HP
Feature: Home Page - Validate Card/Buttons Navigation

  As a user Internal, I need to navigate to
  Home Page and validate card/buttons are working properly

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


  Scenario Outline: User should be able click on "<cardName>" card
    Given "Internal" user navigates to USF and logs in
    Then should be able to see the proper URL on "Home Page" page
    When user clicks on card "<cardName>"
    Then should be able to see the proper URL on "<pageName>" page

    Examples:
      | cardName   | pageName        |
      | Deliveries | My Orders       |
      | Browse     | Browse Products |
      | My Lists   | View All Lists  |


  Scenario Outline: User should be able click on "<btnName>" card
    Given "Internal" user navigates to USF and logs in
    Then should be able to see the proper URL on "Home Page" page
    When user clicks on button "<btnName>"
    #Then should be able to see the proper URL on "<pageName>" page

    Examples:
      | btnName        |
      | Create Order   |
      | View All Order |

