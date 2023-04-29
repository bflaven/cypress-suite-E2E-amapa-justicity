/*! E2E-JUSTICITY-CYPRESS */
/* 
* ***********************************************
*  Filename ::: justicity_debug.js
*  Description :: All elements to debug feature
*  Goal :: some debug functions called in the tests
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



// cy.SuperDebug()
Cypress.Commands.add('SuperDebug', () => {
    cy.log(' -- SuperDebug functions --')

    // cy.log('dayjs :: '+dayjs)
    // let pickDate = dayjs().format('DD/MM/YYYY')
    // cy.log('pickDate :: '+pickDate)

 });


// module.exports.SuperDebug = SuperDebug;




