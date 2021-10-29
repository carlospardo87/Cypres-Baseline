@API  @SKIP
Feature: Sending POST product summary API

  Scenario: Checking product summary API
    Given authorization token was requested
    When product summary number "3817079" was requested
    Then "ProductSummary" response should contain status "200"
    And "ProductSummary" response should be successful
    And product summary response body should be successful


