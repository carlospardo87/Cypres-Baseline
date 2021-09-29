@API @R4LA-434  @SKIP
Feature: View All Lists - User is able to create new list

  As a user Internal or External, when I go to View All Lists page
  and I go to create a new list, I should be enabled to create the new list

  Feature: Validate create new list

  Scenario: Validate create new list
    Given authorization token was requested
    When requesting ListGroup API with customer:"702738", divisionNro:"2160" and departmentNro:"0"
    And Lists name "CypressList" was created
    Then "NewList" response should contain status "200"
    When requesting Lists API
    Then "Lists" response should contain status "200"
    And "Lists" response should contain "CypressList"