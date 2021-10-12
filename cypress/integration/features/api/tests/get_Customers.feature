@API @SKIP
Feature: Getting Customers API

  Scenario: Getting Customers API
    Given authorization token was requested with account "r4tmid1"
    When requesting customers API
    Then "Customers" response should contain status "200"
    And "Customers" response should be successful
    And customers response body should be successful
