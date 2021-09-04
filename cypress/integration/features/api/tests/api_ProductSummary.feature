@API
Feature: Sending POST product summary API

  Scenario: Checking product summary AP
    Given authorization token was requested
    When product summary number "3246972" was requested
    Then "ProductSummary" response should contain status "200"
    And product summary response should be successful


