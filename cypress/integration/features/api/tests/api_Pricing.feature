@API
Feature: Checking product pricing API

  Background:
    Given authorization token was requested

  Scenario Outline: Checking pricing API with request token
    When refresh token was requested with customer: "13761622" and division: "4117"
    And product pricing number "<productNum>" was requested with refresh token
    Then product pricing response should contain status "<status>"
    And product pricing response should contain "<key>" : "<value>"

    Examples:
      | productNum |status    |key              |value   |
      | 8456758    |200       |productNumber    |8456758 |
      | 8456758    |200       |unitPrice        |59.44   |



