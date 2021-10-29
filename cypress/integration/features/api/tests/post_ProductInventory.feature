@API @SKIP
Feature: Sending POST product inventory API

  Scenario: Checking product inventory API
    Given authorization token was requested
    When product inventory number "1712140" was requested
    Then "ProductInventory" response should contain status "200"
    And "ProductInventory" response should be successful
    And product inventory response body should be successful




