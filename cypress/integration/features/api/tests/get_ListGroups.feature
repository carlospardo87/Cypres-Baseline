@API
Feature: Getting ListGroup API

  Scenario: Getting ListGroup API without customer details
    Given authorization token was requested
    When requesting ListGroup API
    Then "ListGroups" response should contain status "200"
    And "ListGroups" response should be successful
    And "ListGroups" response body should be successful


  #Scenario: Getting ListGroup API with customer details
  #  Given authorization token was requested
  #  When requesting ListGroup API with customer:"83761619", divisionNro:"4117" and departmentNro:"0"
  #  Then "ListGroupsWithCustomer" response should contain status "200"
  #  And "ListGroupsWithCustomer" response should be successful
  #  And "ListGroupsWithCustomer" response body should be successful