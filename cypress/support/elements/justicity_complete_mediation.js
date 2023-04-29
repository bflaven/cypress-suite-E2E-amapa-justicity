/*! E2E-JUSTICITY-CYPRESS */
/* 
* ***********************************************
*  Filename ::: justicity_complete_mediation.js
*  Description :: All elements to complete mediation as an admin
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




// cy.AppJusticityDashboardCompleteMediation()
Cypress.Commands.add('AppJusticityDashboardCompleteMediation', () => {

        cy.log(' -- AppJusticityDashboardCompleteMediation functions --')

        const emailSearch = globalValues.contentChanceOneEmail;


        cy.log('emailSearch :: '+ emailSearch);

        let slug = globalValues.DESTINATION_APP_JUSTICITY_SLUG[0];
        cy.log(globalValues.BASE_URL + slug );
        cy.visit( globalValues.BASE_URL  + slug );
        cy.wait(globalValues.contentTimerDraft);

        cy.reload()
        


        // Select "Médiation créée"
        // cy.get('#kt_content > div.ml-10.mr-10 > div.card.card-custom > div.card-body > div.mb-7 > div > div > div > div:nth-child(2) > div > div > button > div > div > div', {timeout:10000}).click({force: true});
        // cy.wait(globalValues.contentTimerDraft);
        

        cy.get('#kt_datatable_search_query', {timeout:10000}).type(emailSearch);
        cy.wait(globalValues.contentTimerDraft);

        // cy.get('#bs-select-1 > ul > li:nth-child(2)', {timeout:10000}).click({force: true});
        // cy.wait(globalValues.contentTimerDraft);


        // Edit first "Médiation créée"
        cy.get('#kt_datatable > table > tbody > tr:nth-child(1) > td:nth-child(7) > span > a:nth-child(1) > i', {timeout:10000}).click({force: true});
        cy.wait(globalValues.contentTimerDraft);

        // Complete "Médiation créée"

        // Tab_2 :: Préférences de dates
        cy.get('#kt_wizard_v4 > div.wizard-nav > div > div:nth-child(2)', {timeout:10000}).click({force: true});
        cy.wait(globalValues.contentTimerDraft);

                // Select 4 dates
                for (week=3;week<=6;week++) {
                        
                        for (day=1;day<=5;day++) {
                                cy.log('week :: '+week);
                                cy.log('\t\t--- day :: '+day);
                        
                        cy.get('#kt_calendar > div.fc-view-container > div > table > tbody > tr > td > div > div > div:nth-child('+week+') > div.fc-bg > table > tbody > tr > td:nth-child('+day+')', { timeout: 10000 }).should('exist');
                        cy.get('#kt_calendar > div.fc-view-container > div > table > tbody > tr > td > div > div > div:nth-child('+week+') > div.fc-bg > table > tbody > tr > td:nth-child('+day+')', { timeout: 10000 }).should('be.visible');

                         

                        }
                }


                for (selectDate=0;selectDate<=3;selectDate++) {

                                let randomWeek = ''+(Math.floor(Math.random() * 3) + 3)+'';
                                let randomDay = ''+(Math.floor(Math.random() * 5) + 1)+'';

                                // cy.log('Case selectDate :: '+selectDate);
                                // cy.log('\t\t--- randomWeek :: '+randomWeek);
                                // cy.log('\t\t--- randomDay :: '+randomDay);
                                
                                cy.log('Case_'+selectDate);
                                cy.get('#kt_calendar > div.fc-view-container > div > table > tbody > tr > td > div > div > div:nth-child('+randomWeek+') > div.fc-bg > table > tbody > tr > td:nth-child('+randomDay+')', {timeout:10000}).click({force: true});
                                

                }

                // Valider mes dates     
                cy.get('#calendar_form > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > button', {timeout:10000}).click({force: true});
                cy.wait(globalValues.contentTimerDraft);




                // Save the dates
                cy.get('#swal2-title', {timeout: 10000}).then($value => {
                                      const textValue = $value.text();
                                      cy.log('textValue :: ' + textValue );
                                      expect(textValue).to.include( globalValues.TAB_2_COMPLETE_MEDIATION_SUCCESS_POPUP_H2 );
                                });

                cy.get('#swal2-content', {timeout: 10000}).then($value => {
                                      const textValue = $value.text();
                                      cy.log('textValue :: ' + textValue );
                                      expect(textValue).to.include( globalValues.TAB_2_COMPLETE_MEDIATION_SUCCESS_POPUP_CONTENT );
                                });

                cy.get('#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions', {timeout: 10000}).then($value => {
                                      const textValue = $value.text();
                                      cy.log('textValue :: ' + textValue );
                                      expect(textValue).to.include( globalValues.TAB_2_COMPLETE_MEDIATION_SUCCESS_POPUP_BUTTON );
                                });

                cy.get('#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions', {timeout:10000}).click({force: true});
                cy.wait(globalValues.contentTimerDraft);

                //End
                cy.reload()
                cy.wait(globalValues.contentTimerDraft);

                // Tab_3 :: Convention de médiation
                cy.get('#kt_wizard_v4 > div.wizard-nav > div > div:nth-child(3)', {timeout:10000}).click({force: true});
                cy.wait(globalValues.contentTimerDraft);

                // Valider la convention  
                cy.get('#kt_wizard_v4 > div.card.card-custom.card-shadowless.rounded-top-0.cards_setup.card_setup_4 > div > div > div > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span.btn.btn-primary.font-weight-bold.text-uppercase.px-9.py-4', {timeout: 10000}).then($value => {
                      const textValue = $value.text();
                      cy.log('textValue :: ' + textValue );
                      expect(textValue).to.include( globalValues.TAB_3_COMPLETE_MEDIATION_SUCCESS_BTN_1 );
                });

                // Télécharger en pdf
                cy.get('#kt_wizard_v4 > div.card.card-custom.card-shadowless.rounded-top-0.cards_setup.card_setup_4 > div > div > div > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span.btn.btn-info.font-weight-bold.text-uppercase.px-9.py-4', {timeout: 10000}).then($value => {
                      const textValue = $value.text();
                      cy.log('textValue :: ' + textValue );
                      expect(textValue).to.include( globalValues.TAB_3_COMPLETE_MEDIATION_SUCCESS_BTN_2 );
                });



                // Envoyer une demande de signature électronique
                cy.get('#kt_wizard_v4 > div.card.card-custom.card-shadowless.rounded-top-0.cards_setup.card_setup_4 > div > div > div > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > div > span', {timeout: 10000}).then($value => {
                      const textValue = $value.text();
                      cy.log('textValue :: ' + textValue );
                      expect(textValue).to.include( globalValues.TAB_3_COMPLETE_MEDIATION_SUCCESS_BTN_3 );
                });

                // Valider la convention :: click on OK
                cy.get('#kt_wizard_v4 > div.card.card-custom.card-shadowless.rounded-top-0.cards_setup.card_setup_4 > div > div > div > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span.btn.btn-primary.font-weight-bold.text-uppercase.px-9.py-4', {timeout:10000}).click({force: true});
                                // cy.wait(globalValues.contentTimerDraft);


                cy.get('#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled', {timeout:10000}).click({force: true});
                                // cy.wait(globalValues.contentTimerDraft);

                //End
                cy.reload()
                cy.wait(globalValues.contentTimerDraft);

                cy.log('\n--- End :: TABS_COMPLETE_MEDIATION_SUCCESS')
                // cy.log(globalValues.TABS_COMPLETE_MEDIATION_SUCCESS)

                     let succesTabs = globalValues.TABS_COMPLETE_MEDIATION_SUCCESS;

                    Object.keys(succesTabs).forEach((key, idx) => {

                        cy.log('--- Tab_'+idx+' :: '+ key);

                        cy.log('tab_label (succesTabs[key][0]) :: '+succesTabs[key][0]);
                        cy.log('tab_desc (succesTabs[key][1]) :: '+succesTabs[key][1]);
                        cy.log('tab_css_success (succesTabs[key][2]) :: '+succesTabs[key][2]);

                            cy.get(succesTabs[key][2], {timeout: 10000}).then($value => {
                                          const textValue = $value.text();
                                          cy.log('textValue :: ' + textValue );
                                          expect(textValue).to.include(succesTabs[key][1]);
                                    });
                        
                       
                        });

                         
                        
                // Make a screenshot of the full page
                cy.MakeScreenshot('AppJusticityDashboardCompleteMediation')
                cy.wait(globalValues.contentTimerDraft);




});







