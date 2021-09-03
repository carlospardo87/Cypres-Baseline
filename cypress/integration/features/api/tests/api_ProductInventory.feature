@API
Feature: Sending POST product inventory API

  Scenario: Checking product inventory API
    Given authorization token was requested
    When product inventory number "1712140" was requested
    Then "ProductInventory" response should contain status "200"
    And product inventory response should be successful




