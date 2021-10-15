@API @SKIP
Feature: Getting List Item Notes API with customer details

  Scenario: Getting List Item Notes API with customer details
    Given authorization token was requested
    When requesting ListItemNotes API with customer:"83761619", divisionNro:"4117" and departmentNro:"0"
    Then "ListItemNotesWithCustomer" response should contain status "200"
    And "ListItemNotesWithCustomer" response should be successful
    And "ListItemNotesWithCustomer" response body should be successful

