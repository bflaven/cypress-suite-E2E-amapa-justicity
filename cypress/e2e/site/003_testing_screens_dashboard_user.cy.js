// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

/*

[FILENAME]
003_testing_screens_dashboard_user.cy.js

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


// 003_testing_screens_dashboard_user


describe('003 @backoffice @login @mediateur @user @dashboard @mediation :: for ' + globalValues.username + ' on ' + globalValues.DEVICE_TYPE + ' ::  TESTING DASHBOARD', function () {


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
        cy.AppJusticityDashboardLoginFormAdvanced(globalValues.username_USER, globalValues.password_USER);
    });


    afterEach(function () {
        cy.log('--- Logout --- ');
        cy.AppJusticityDashboardLogout();
    });

    /* E2E SUITE */


        it('003_1 @backoffice @login @user @dashboard @navigation :: on ' + globalValues.DEVICE_TYPE + ' ::  TESTING NAVIGATION DASHBOARD (AppJusticityDashboardNavUser)', function () {
                
                    cy.AppJusticityDashboardNavUser()


        });

        


// Do not forget to close the test...
/* END describe */
});






