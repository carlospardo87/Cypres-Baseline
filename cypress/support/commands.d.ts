// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {

        //******************************
        // API SECTION CHAINABLE COMMAND
        //******************************

        /**
         *
         * @param token
         * @param productNum
         */
        getProductSummary(token,productNum),

        getProductPricing(token,productNum),

        getProductInventory(token,productNum),

        checkStatusCode(alias, statusCode)

        /**
         * Get Token
         */
        getAuthToken(),

        getRefreshTokenByCustomer(refreshToken, customerNro, divisionNro),

        /**
         *
         */
        getResponseBodyProductSummary(body),


        //******************************
        // UI SECTION CHAINABLE COMMAND
        //******************************

        /**
         * Method intercepts URL, navigate to a new URL and wait for server response
         */
        navigateTo(methodRequest, urlToIntercept, alias, url, statusCode)

        /**
         * Method intercept URL, click an element by locator and wait for server response
         */
        clickElementInterceptResponse(methodRequest, urlToIntercept, alias, elementToClick, statusCode)

        /**
         * Method do a click by the element name
         */
        clickByName(tag,elementName)

        /**
         * Method intercepts URL and wait for server response
         */
        interceptUrl(methodRequest, urlToIntercept, alias, statusCode)

        /**
         * Method intercepts URL and mock the response
         */
        clickElementStubbingResponseByBody(methodRequest, urlToIntercept, stubBody, alias, elementToClick, statusCode)

        /**
         * Method to highlight element border on Cypress debugger
         */
        highlightBorderElement(locator, color)

        /**
         * Method to match any text with the expected regex pattern
         */
        shouldMatchRegex(locator,item, regex)

        /**
         * Method check any element have the expected chainer
         */
        shouldElement(locator,item, chainer, expectedText?:any)

        /**
         * Method check locator have the attribute
         */
        shouldHaveAttribute(locator, attrName, attrValue)

        /**
         * Method check Loading spinner is visible and contain the expected information
         */
        shouldAppearLoadingSpinner(locator, popUpInfo)


        highlightBorder(locator, color)

        clickElement(locator,item)

        clickElementForce(locator,item)

        getIfExists(getIfExists)
    }
}