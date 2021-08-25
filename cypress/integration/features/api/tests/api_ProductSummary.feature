@API
Feature: Checking product summary API

  Scenario Outline: Checking product summary AP
    Given authorization token was requested
    When product summary number "<productNum>" was requested
    Then product summary response should contain status "<status>"
    And product summary response should contain "<key>" : "<value>"

    Examples:
      | productNum |status    |key      |value   |
      | 3246972    |200       |brand    |PACKER  |



