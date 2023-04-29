/*! E2E-JUSTICITY-CYPRESS */
/* 
* ***********************************************
*  Filename ::: justicity_device.js
*  Description :: All elements to select a device
*  Goal :: some user selection functions called in the tests
* 
*  For more comprehensive examples of custom
*  commands please read more here:
*  https://on.cypress.io/custom-commands
*  ***********************************************
* 
*  Thanks to Anthony for the tip :);
*  
*/

/*
* CAUTION :: somme import needs a relative URL to be changed
*/

import {globalValues} from '../../fixtures/allValues';
import { userDevice } from '../utilsVariables';

let deviceType = globalValues.DEVICE_TYPE;

import {
        doRandomString,
        dostartDateString,
        doRandomContentInsert,
        doRandomImageInsert,
        doRandomImageInsertSmall,
        doRandomImageInsertCk,
        doRandomImageInsertContent,
        doBroadcastDateInput,
        doRandomTime,
        doRandomBroadcastDateInput,
        uniqueStringCode,
        generateRandomNum,
        randomAlphaCode,
        generateRandomLetterSource,
        generateRandomLetterDestination
} from '../utils';



// cy.SelectDeviceForResponsive(userAgent, userAgentOrientation, viewportWidth, viewportHeight)
Cypress.Commands.add('SelectDeviceForResponsive', (userAgent, userAgentOrientation, viewportWidth, viewportHeight) => {

        cy.log(' -- SelectDeviceForResponsive functions --')
        // cy.log('verifierValue :: '+verifierValue+'')
        cy.log('DEVICE_TYPE :: '+globalValues.DEVICE_TYPE)
        cy.log('userDevice.userAgent :: '+userDevice.userAgent)
        cy.log('userDevice.userAgentOrientation :: '+userDevice.userAgentOrientation)
        cy.log('userDevice.viewportWidth :: '+userDevice.viewportWidth)
        cy.log('userDevice.viewportHeight :: '+userDevice.viewportHeight)

        cy.log(' -- The device has been set --')
        cy.viewport(userDevice.userAgent, userDevice.userAgentOrientation, userDevice.viewportWidth, userDevice.viewportHeight)


        cy.wait(globalValues.timerNavigation)

});







