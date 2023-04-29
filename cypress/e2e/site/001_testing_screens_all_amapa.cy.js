// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

/*

[FILENAME]
001_testing_screens_all_amapa.cy.js

[PATH]
cd /Users/brunoflaven/Documents/02_copy/_00000_site_amapa/cypress_suite_E2E_amapa_etienne/amapa-e2e-cypress/



[LAUNCH]
- launch all test in the RUNNER with no specs
npx cypress run 
npx cypress open

- launch all test in the console with no specs with no video and captures
npx cypress run --config video=false,screenshotOnRunFailure=false

- with device 
npx cypress open --env DEVICE_TYPE="desktop" --config video=false,screenshotOnRunFailure=false


 */


const {globalValues} = require('../../fixtures/allValues');
let deviceType = globalValues.DEVICE_TYPE;

import { userDevice } from '../../support/utilsVariables';



// 001_testing_screens_all_amapa

describe('001 @site @mediation @screen_1 @partie_a @html @structure @mediation :: on ' + globalValues.DEVICE_TYPE + ' :: AMAPA :: TESTING SCREEN_1 PARTIE_A (AppAmapaJusticityScreen1PartieA)', function () {


    before(function () {
        // cy.log('--- DEBUG --- ')
        cy.SuperDebug()

        // cy.log('deviceType :: '+deviceType)
        // cy.log('userDevice :: '+userDevice)
        
        // Need to move it inside the test itself
        cy.SelectDeviceForResponsive(userDevice.userAgent, userDevice.userAgentOrientation, userDevice.viewportWidth, userDevice.viewportHeight)
        



    });

    /* E2E SUITE */


        it('001 @site @mediation @screen_1 @partie_a @html @structure @mediation :: on ' + globalValues.DEVICE_TYPE + ' :: AMAPA :: TESTING SCREEN_1 PARTIE_A (AppAmapaJusticityScreensAll)', function () {
                    cy.AppAmapaJusticityScreensAll()
                
                
        });

        
 

        


// Do not forget to close the test...
/* END describe */
});






