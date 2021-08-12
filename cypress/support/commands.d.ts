// in cypress/support/index.d.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {

        forceClick()

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

        /**
         *
         */
        getResponseBodyProductSummary(body),
        /**
         * Method intercepts URL, navigate to a new URL and wait for server response
         * @param methodRequest
         * @param urlToIntercept
         * @param alias
         * @param url
         * @param statusCode
         */

        //******************************
        // UI SECTION CHAINABLE COMMAND
        //******************************
        
        navigateTo(methodRequest: string, urlToIntercept: string, alias: string, url: string, statusCode: number)

        /**
         * Method intercept URL, click an element by locator and wait for server response
         * @param methodRequest
         * @param urlToIntercept
         * @param alias
         * @param elementToClick
         * @param statusCode
         */
        clickElement(methodRequest: string, urlToIntercept: string, alias: string, elementToClick: string, statusCode: number)

        /**
         * Method intercepts URL, click an element by the content and wait for server response
         * @param methodRequest
         * @param urlToIntercept
         * @param alias
         * @param elementContent
         * @param statusCode
         */
        clickElementIfContain(methodRequest: string, urlToIntercept: string, alias: string, elementContent: any, statusCode: number)

        /**
         * Method intercepts URL and wait for server response
         * @param methodRequest
         * @param urlToIntercept
         * @param alias
         * @param statusCode
         */
        interceptUrl(methodRequest: string, urlToIntercept: string, alias: string, statusCode: number)

        /**
         * Method intercepts URL and mock the response
         * @param methodRequest
         * @param urlToIntercept
         * @param stubBody        mocked response
         * @param alias
         * @param elementToClick
         * @param statusCode
         */
        clickElementStubbingResponseByBody(methodRequest: any, urlToIntercept: any, stubBody: any, alias: any, elementToClick: any, statusCode: any)


        /**
         *  Mock product details page response
         * @param stubBody mocked body
         * @param alias  
         *
         */
        navigateToProductStubbingPSResponseBody(stubBody: undefined, alias: undefined)

        swipeUp(locator: any)

        console()

        disableSmoothScroll()


        /**
         * Method to highlight element border on Cypress debugger
         * @param locator
         * @param color
         */
        highlightBorderElement(locator: string, color: string)



        shouldContainRegex(locator: any, regex: any)

        elementShould(locator: any,item: any, chainer: any, expectedText: any)
        shouldExist(locator: any)


    }
}