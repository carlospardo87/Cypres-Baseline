@API
Feature: Checking product inventory API

  Scenario Outline: Checking product inventory API
    Given authorization token was requested
    When product inventory number "<productNum>" was requested
    Then product inventory response should contain status "<status>"
    And product inventory response should contain "<key>" : "<value>"

    Examples:
      | productNum |status    |key              |value   |
      | 1712140    |200       |productNumber    |1712140 |



