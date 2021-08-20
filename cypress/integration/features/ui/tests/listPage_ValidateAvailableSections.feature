@UI @R4LA-175 @LP
Feature: List Page - Validate the available sections

  As a user Internal or External I need to navigate to My List Page
  and check that I am able to interact all the
  available sections

  Background:
    Given User navigates to USF with "browser"

  Scenario Outline: User should be able to see the available section
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button and updates list items count
    Then "<userType>" should be able to see each section name
    And should be able to see column description per section
    And should be able to see list description per section

    Examples:
      | userType |uname       |   password     |
      | Internal |tmid2       |   Welcome12    |
      | External |prodsupp101 |   today123     |


  Scenario Outline: User should be able to see "There are no lists to show" in each section
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button and handles the response
    Then should be able to see in each section "There are no lists to show"

    Examples:
      | userType |uname       |   password |
      | Internal |tmid2       |   Welcome12|
      | External |prodsupp101 |   today123 |



  Scenario Outline: User should be able to see the list item count
    When "<userType>" user logs in with valid credentials "<uname>" and "<password>"
    And clicks on My Lists button and updates list items count
    Then should see the number of products per section "<listItemCount>"

    Examples:
      | userType |uname        |   password    | listItemCount |
      | Internal |tmid2       |   Welcome12    | 0,999,1000,9999|
      | External |prodsupp101 |   today123     | 0,9999         |
