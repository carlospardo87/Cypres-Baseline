@API
Feature: Sending POST pricing API

  Background:
    Given authorization token was requested

  Scenario: Checking pricing API with request token
    Given authorization token was requested
    #When refresh token was requested with customer: "20914719" and division: "2160"
    And product pricing number "3588480" was requested with refresh token
    Then "ProductPricing" response should contain status "200"
    And product pricing response should be successful





