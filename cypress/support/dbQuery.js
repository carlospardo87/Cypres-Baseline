'use strict'

export default class dbQuerys {
   
    // tmid2 customers:  80906241,90875162,90884834,20853123,3504370,13586193
    
    customerUser(userId){
        cy.task('getData', {
            dbName: 'customer-domain-api',
            collection: 'UserCustomer',
            filter: { userId: userId },
            output: 'customers/customerUser',
        })    
        cy.fixture('customers/customerUser').then(function (dataQuery) {
            globalThis.customer = dataQuery
        })
    }

    directProduct(divisionNumber){
        cy.task('getData', {
            dbName: 'product-domain-api',
            collection: 'ProductSummary',
            filter: { divisionNumber: divisionNumber, directEligible: true, productStatus: '1' },
            output: 'products/directProduct',
        })
    
        cy.fixture('products/directProduct').then(function (data) {
            globalThis.product = data
        })
    }

    customerDirectEligible(){
        cy.task('getData', {
            dbName: 'customer-domain-api',
            collection: 'Customer',
            filter: { directEligible: true , customerNumber:{$in:[702738,34016238,13761622,80906241,41407560,63969760,23589047,80991581,40474751]}},
            output: 'customers/customerDirectEligible',
        })
        cy.fixture('customers/customerDirectEligible').then(function (data) {
            globalThis.customer = data
        })
    
    }

    customer(){
        cy.task('getData', {
            dbName: 'customer-domain-api',
            collection: 'Customer',
            filter: { directEligible: false , customerNumber:{$in:[702738,34016238,13761622,80906241,41407560,63969760,80991581,40474751]}},
            output: 'customer',
        })
        cy.fixture('customer').then(function (data) {
            globalThis.customer = data
        })
    
    }
    locallySourcedProduct(divisionNumber){
        cy.task('getData', {
            dbName: 'product-domain-api',
            collection: 'ProductSummary',
            filter: { divisionNumber: divisionNumber, locallySourceIndicator:true , productStatus:{$ne:'9'}},
            output: 'products/locallySourcedProduct',
        })
    
        cy.fixture('products/locallySourcedProduct').then(function (data) {
            globalThis.product = data
        })
    }

    jitProduct(divisionNumberJ){
        cy.task('getData', {
            dbName: 'product-domain-api',
            collection: 'ProductSummary',
            filter: { divisionNumber:divisionNumberJ,justInTime:true,$and:[{productStatus: {$ne:"1"}},{productStatus: {$ne:"0"}}]  },
            output: 'products/jitProduct',
        })
    
        cy.fixture('products/jitProduct').then(function (data) {
            globalThis.product = data
        })
    }

    product(divisionNumber){
        cy.task('getData', {
            dbName: 'product-domain-api',
            collection: 'ProductSummary',
            filter: { divisionNumber:4117,productDescLong:{$ne:null},brand:{$ne:null},productStatus:{$ne:'9'}},
            output: 'products/product',
        })
    
        cy.fixture('products/product').then(function (data) {
            globalThis.product = data
        })
    }
    

}