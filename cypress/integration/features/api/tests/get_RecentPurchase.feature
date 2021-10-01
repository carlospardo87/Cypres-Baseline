@API  @SKIP
Feature: Getting Recent Purchase API

  Scenario: Getting Recent Purchase API
    Given authorization token was requested with account "r4tmid1"
    When requesting recent purchase API
    Then "RecentPurchase" response should contain status "200"
    And "RecentPurchase" response should be successful
    And recent purchase response body should be successful
