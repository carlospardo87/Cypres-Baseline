@story("R4PS-4") @feature("ProductSumary")
Feature: Checking product summary API 

  @API @ProductSumary @suite("ProductSumary_Api")
  Scenario Outline: Checking product summary API 
    Given authorization token was requested
    When product summary number "<productNum>" was requested
    Then product summary response should contain status "<status>"
    And product summary response should contain "<key>" : "<value>"
    Examples:
      | productNum |status    |key                       |value   |
      | 138628     |200       |directEligible            |true    |
      | 8525743    |200       |locallySourceIndicator    |true    |
      | 5238969    |200       |productDescLong           |CHIP, TORTLA CORN YLW RND    |

