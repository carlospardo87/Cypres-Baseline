@API
Feature: Sending POST pricing API

  Scenario: Checking pricing API with request token
    Given authorization token was requested with account "r4tmid1"
    And product pricing number "3588480" was requested with refresh token
    Then "ProductPricing" response should contain status "200"
    And product pricing response body should contain "3588480"





