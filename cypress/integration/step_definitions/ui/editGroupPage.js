/// <reference types="Cypress" />

import {When, Then} from 'cypress-cucumber-preprocessor/steps'
import EditListPage from '../../../support/pages/EditListPage';

Then('should be able to select option {string}', (optionInfo) => {
    new EditListPage().selectOptionToDelete(optionInfo)
})

When('should be able to see the button group name {string} changed to {string}', (buttonGroupPosition, newGroupName) => {
    new EditListPage().validateButtonGroupNameChanged(buttonGroupPosition, newGroupName)
})

When('should be able to see the title group name {string} changed to {string}', (buttonGroupPosition, newGroupName) => {
    new EditListPage().validateGroupNameChanged(buttonGroupPosition, newGroupName)
})


