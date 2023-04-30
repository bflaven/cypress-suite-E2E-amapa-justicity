// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

/*

[FILENAME]
002_testing_screens_dashboard_mediateur.cy.js

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


// 002_testing_screens_dashboard_mediateur


describe('002 @backoffice @login @mediateur @user @dashboard @mediation :: for ' + globalValues.username + ' on ' + globalValues.DEVICE_TYPE + ' :: TESTING DASHBOARD MEDIATEUR ', function () {


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



        it('002_1 @backoffice @login @mediateur @dashboard @navigation :: on ' + globalValues.DEVICE_TYPE + ' :: TESTING DASHBOARD MEDIATEUR :: NAVIGATION DASHBOARD (AppJusticityDashboardNav)', function () {
                
                    cy.AppJusticityDashboardNav()
                    


        });

        it('002_2 @backoffice @login @mediateur @dashboard @user :: on ' + globalValues.DEVICE_TYPE + ' :: TESTING DASHBOARD MEDIATEUR :: TESTING USER SETTINGS DASHBOARD (AppJusticityDashboard)', function () {
                
                    cy.AppJusticityDashboardUserSettings()


        });
 
        it('002_3 @backoffice @login @mediateur @dashboard @ux @ui @destination @externes :: on ' + globalValues.DEVICE_TYPE + ' :: TESTING DASHBOARD MEDIATEUR :: TESTING MEDIATIONS EXTERNES DASHBOARD (AppJusticityDashboard)', function () {
                

                    
                    cy.AppJusticityDashboardDestination(globalValues.DESTINATION_APP_JUSTICITY_SLUG[0])


        });
 
        
        it('002_4 @backoffice @login @mediateur @dashboard @ux @ui @destination @justicity :: on ' + globalValues.DEVICE_TYPE + ' :: TESTING DASHBOARD MEDIATEUR ::  TESTING MEDIATIONS JUSTICITY DASHBOARD (AppJusticityDashboard)', function () {
                

                    
                    cy.AppJusticityDashboardDestination(globalValues.DESTINATION_APP_JUSTICITY_SLUG[1])


        });



        it('002_5 @backoffice @login @mediateur @dashboard @ux @ui @destination @justicity :: on ' + globalValues.DEVICE_TYPE + ' :: TESTING DASHBOARD MEDIATEUR ::  TESTING MEDIATIONS JUSTICITY DASHBOARD (AppJusticityDashboard)', function () {
                

                    
                    cy.AppJusticityDashboardDestination(globalValues.DESTINATION_APP_JUSTICITY_SLUG[1])


        });


// Do not forget to close the test...
/* END describe */
});






