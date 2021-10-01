@API
Feature: Getting ListItems API

  Scenario: Getting ListItems API
    Given authorization token was requested with account "r4tmid1"
    When requesting ListItems API
    Then "ListItems" response should contain status "200"
    And "ListItems" response should be successful
    And "ListItems" response body should be successful
