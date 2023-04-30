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

describe('002 @site @vitals @google @custom :: on ' + globalValues.DEVICE_TYPE + ' ::  Using cy.vitals() command not using the defaults', function () {


    before(function () {
        // cy.log('--- DEBUG --- ')
        cy.SuperDebug()

        // cy.log('deviceType :: '+deviceType)
        // cy.log('userDevice :: '+userDevice)
        
        // Need to move it inside the test itself
        cy.SelectDeviceForResponsive(userDevice.userAgent, userDevice.userAgentOrientation, userDevice.viewportWidth, userDevice.viewportHeight)
        



    });





    beforeEach(function () {
        // Login
        cy.log('--- Login --- ');
        cy.AppJusticityDashboardLoginFormAdvanced(globalValues.username_ADMIN, globalValues.password_ADMIN);
    });

    afterEach(function () {
        cy.log('--- Logout --- ');
        cy.AppJusticityDashboardLogout();
    });


    

    /* E2E SUITE */


        it('002 @site @webvitals @google @custom :: on ' + globalValues.DEVICE_TYPE + ' ::  Using cy.vitals() command not using the defaults :: should meet the custom provided web-vitals thresholds', () => {
    cy.vitals({
      url: globalValues.BASE_URL,
      firstInputSelector: "body",
      thresholds: {
        lcp: 2500,
        fid: 100,
        cls: 0.1,
        fcp: 1800,
        ttfb: 600,
      },
    });
  });

        
 

        


// Do not forget to close the test...
/* END describe */
});




