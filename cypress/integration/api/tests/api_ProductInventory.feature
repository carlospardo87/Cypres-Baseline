@story("R4PS-49") @feature("InventoryOnHand")
Feature: Checking product inventory API

  @API @InventoryOnHand @suite("InventoryOnHand_Api")
  Scenario Outline: Checking product inventory API
    Given authorization token was requested
    When product inventory number "<productNum>" was requested
    Then product inventory response should contain status "<status>"
    And product inventory response should contain "<key>" : "<value>"
    Examples:
      | productNum |status    |key              |value   |
      | 7497258    |200       |eachOnHand       |500     |
      | 7497258    |200       |eachOnReserve    |100     |
      | 7497258    |200       |casesToEachDemand|6       |




  