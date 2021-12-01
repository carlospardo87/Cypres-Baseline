@UI @R4LA-  @BN
Feature: Banner advertising - Validate Modal Replace Product

  As a user Internal, I need to navigate to List Details Page and
  List Management Page, and be able
  to see modal replace product.


  Scenario Outline: User should be able to "Cancel(X)" replace product on "<namePage>"
    Given "Internal" user navigates to USF and logs in
    When goes to the page "<namePage>"
    Then should be able to click option "Accept Replacement" in a discontinued product
    And should be able to see the modal "Replace Product"
    And should be able to select option "Replace from all 1 lists on which this product is included"
    And should be able to click on "Cancel(X)" button

    Examples:
      | namePage        |
      #| Detail List     |
      | Management List |

  Scenario Outline: User should be able to "Cancel" replace product on "<namePage>"
    Given "Internal" user navigates to USF and logs in
    When goes to the page "<namePage>"
    Then should be able to click option "Accept Replacement" in a discontinued product
    And should be able to see the modal "Replace Product"
    And should be able to select option "Replace from This List"
    And should be able to click on "Cancel" button

    Examples:
      | namePage        |
      #| Detail List     |
      | Management List |


