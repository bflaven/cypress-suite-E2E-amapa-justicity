// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

/*

[FILENAME]
004_testing_screens_complete_mediation_file_mediateur.cy.js

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


// 004_testing_screens_complete_mediation_file_mediateur


describe('004 @backoffice @login @mediateur @complete @mediation @mediateur @dashboard @mediation :: for ' + globalValues.username + ' on ' + globalValues.DEVICE_TYPE + ' :: DASHBOARD COMPLETE MEDIATION', function () {


    before(function () {

        cy.log('--- VALUES --- ')        
        // Print in the console with logInfo                    
        // const emailSearch = globalValues.contentChanceOneEmail;
        // cy.task('logInfo', emailSearch)
        // console.log('OUTPUT :: emailSearch :: ' +emailSearch)


        cy.log('--- DEBUG --- ')
        cy.SuperDebug()

        // cy.log('deviceType :: '+deviceType)
        // cy.log('userDevice :: '+userDevice)
        
        // Need to move it inside the test itself
        cy.SelectDeviceForResponsive(userDevice.userAgent, userDevice.userAgentOrientation, userDevice.viewportWidth, userDevice.viewportHeight)
        



    });


beforeEach(function () {
        // Login
        cy.log('--- Login --- ');
        // cy.AppJusticityDashboardLoginFormAdvanced(globalValues.username_ADMIN, globalValues.password_ADMIN);
    });


    afterEach(function () {
        cy.log('--- Logout --- ');
        // cy.AppJusticityDashboardLogout();
    });

    /* E2E SUITE */

        it('004_1 @site @mediation @screen_1 @partie_a @html @structure @mediation :: on ' + globalValues.DEVICE_TYPE + ' :: AMAPA :: TESTING SCREEN_1 PARTIE_A (AppAmapaJusticityScreensAll)', function () {

                   
                    cy.AppAmapaJusticityScreensAll()
                    

                
        });


        it('004_2 @backoffice @login @user @dashboard @navigation :: on ' + globalValues.DEVICE_TYPE + ' ::  DASHBOARD COMPLETE MEDIATION (AppJusticityDashboardNavUser)', function () {
                
                    cy.AppJusticityDashboardLoginFormAdvanced(globalValues.username_ADMIN, globalValues.password_ADMIN);
                    cy.AppJusticityDashboardCompleteMediation()


        });


        
            

// Do not forget to close the test...
/* END describe */
});






