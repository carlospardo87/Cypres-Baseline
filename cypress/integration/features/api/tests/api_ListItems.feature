@API
Feature: Getting ListItems API

  Scenario: Getting ListItems API
    Given authorization token was requested
    When requesting ListItems API
    Then "ListItems" response should contain status "200"
    And "ListItems" response should be successful
