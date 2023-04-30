// type definitions for Cypress object "cy"
/// <reference types="Cypress" />

/*

[FILENAME]
003_web_vitals_report.cy.js

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



// 003_web_vitals_report


const customThresholds = {
  lcp: 2500,
  fid: 100,
  cls: 0.1,
};



describe('003 @site @vitals @google @custom :: on ' + globalValues.DEVICE_TYPE + ' ::  Using cy.vitals() command not using the defaults', function () {


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


    it('003 @site @webvitals @google @report :: on ' + globalValues.DEVICE_TYPE + ' ::  Using cy.vitals() command not using the defaults', () => {
    cy.vitals({
      // url: "https://www.google.com/",
      url: globalValues.BASE_URL,
      thresholds: customThresholds,
      onReport(report) {
        expect(report.thresholds).to.equal(customThresholds);
        expect(report.results).to.have.property("lcp");
        expect(report.results).to.have.property("fid");
        expect(report.results).to.have.property("cls");
        expect(report.results).to.have.property("fcp");
        expect(report.results).to.have.property("ttfb");

        cy.log("------ onReport values ------");
        cy.log(JSON.stringify(report, undefined, 2));
        cy.log("-----------------------------");
      },
    });
  });

        
 

        


// Do not forget to close the test...
/* END describe */
});




