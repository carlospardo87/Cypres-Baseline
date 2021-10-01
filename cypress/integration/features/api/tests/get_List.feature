@API
Feature: Getting List API

  Scenario: Getting List API
    Given authorization token was requested with account "r4tmid1"
    When requesting Lists API
    Then "Lists" response should contain status "200"
    And "Lists" response should be successful
    And "Lists" response body should be successful
