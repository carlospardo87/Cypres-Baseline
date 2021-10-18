@API @R4LA-434 @SKIP
Feature: Sending POST create a new list API

  Scenario: Checking create list API
    Given authorization token was requested
    When requesting ListGroup API with customer:"83761619", divisionNro:"4117" and departmentNro:"0"
    And Lists name "CypressList" was created
    Then "NewList" response should contain status "200"
    When requesting Lists API
    Then "Lists" response should contain status "200"
    And "Lists" response should contain "CypressList"