@API
Feature: Sending POST pricing API

  Background:
    Given authorization token was requested

  Scenario: Checking pricing API with request token
    When refresh token was requested with customer: "13761622" and division: "4117"
    And product pricing number "8456758" was requested with refresh token
    Then "ProductPricing" response should contain status "200"
    And product pricing response should be successful





