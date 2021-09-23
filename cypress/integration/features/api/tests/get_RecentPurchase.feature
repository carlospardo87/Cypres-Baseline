@API
Feature: Getting Recent Purchase API

  Scenario: Getting Recent Purchase API
    Given authorization token was requested
    When requesting recent purchase API
    Then "RecentPurchase" response should contain status "200"
    And "RecentPurchase" response should be successful
    And recent purchase response body should be successful
