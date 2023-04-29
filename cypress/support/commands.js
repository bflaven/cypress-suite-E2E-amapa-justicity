// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
 


// Check out all values
import {globalValues} from '../fixtures/allValues';
let deviceType = globalValues.DEVICE_TYPE;
import { userDevice } from './utilsVariables';


//Import specific files
import './elements/justicity_debug';
import './elements/justicity_device';
import './elements/justicity_complete_mediation';

// add dayjs
const dayjs = require('dayjs');


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
} from './utils';

/* 
* Filename: amapa_tool.js
*
* */

// cy.MakeScreenshot(fileName)
Cypress.Commands.add('MakeScreenshot', (fileName) => {

  let ScreenshotDate = new Date();
  let monthPic = parseInt(ScreenshotDate.getMonth() + 1);
  let dayPic = ScreenshotDate.getDate();
  let yearPic = ScreenshotDate.getFullYear();


  let ScreenshotFilename = ("" + dayPic + "_" + monthPic + "_" + yearPic + "");

  cy.log('\n--- ScreenshotFilename :: ' + fileName + '_' + ScreenshotFilename + '_' + generateRandomNum(5) );
  // Capture
  cy.screenshot( fileName + '_' + ScreenshotFilename + '_' + generateRandomNum(5) );
});

// cy.EndUpLight()
Cypress.Commands.add('EndUpLight', () => {

  cy.log("\n--- END");
  cy.wait(globalValues.timerNavigation);
  cy.log( globalValues.TOTEM_TEST_MAN_CYPRESS );


});

/* 
* Filename: justicity_debug.js
* for SuperDebug see the file above in /support/elements/justicity_debug.js
* 
* */


/* 
* Filename: justicity_debug.js
* for SelectDeviceForResponsive see the file above in /support/elements/justicity_device.js
* 
* */

/* 
* Filename: amapa_justicity.js
*
* */ 


// cy.AppJusticityDashboardLoginFormAdvanced();
Cypress.Commands.add('AppJusticityDashboardLoginFormAdvanced', (user, password) => {
  cy.log(' -- AppJusticityDashboardLoginFormAdvanced functions --')
  cy.visit('/');
  cy.log(' -- login --');
  cy.get('#kt_login_signin_form > div:nth-child(3) > input').type(user);
  cy.get('#kt_login_signin_form > div:nth-child(4) > input').type(password);
  cy.get('#kt_login_signin_submit').click();
  cy.log(' -- check dashboard --');
  cy.log(' -- logged in --');
  cy.location().should((loc) => {
        expect(loc.host).to.eq(globalValues.APP_MAIN_DOMAIN);
        expect(loc.hostname).to.eq(globalValues.APP_MAIN_DOMAIN);
    });

});


// cy.AppJusticityDashboardLogout();
Cypress.Commands.add('AppJusticityDashboardLogout', () => {
  cy.log(' -- AppJusticityDashboardLogout functions --')
  // cy.visit('/logout');
});

// cy.AppJusticityDashboardNavUser();
Cypress.Commands.add('AppJusticityDashboardNavUser', () => {
  cy.log(' -- AppJusticityDashboardNavUser functions --')

        // Nav verticale
        cy.log('\n--- Nav verticale')

        // Mes Médiations
        cy.log('\n--- Mes Médiations')
        cy.get('#kt_aside_toggle', {timeout:10000}).click({force: true});
        cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu', {timeout:10000}).click();
        cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu.menu-item-open > div > ul > li:nth-child(2)', {timeout:10000}).click();

        // Mes litiges
        cy.log('\n--- Mes litiges')
        cy.get('#kt_aside_toggle', {timeout:10000}).click({force: true});
        cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu', {timeout:10000}).click();
        cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu.menu-item-open > div > ul > li:nth-child(3)', {timeout:10000}).click();

        // Nav horizontale
        cy.log('\n--- Nav horizontale')

        // Médiations
        cy.log('\n--- Médiations')

        // Mes Médiations
        cy.log('\n--- Mes Médiations')
        cy.get('#kt_header_menu > ul > li:nth-child(2)', {timeout:10000}).click();
        cy.get('#kt_header_menu > ul > li.menu-item.menu-item-submenu.menu-item-rel.menu-item-open-dropdown.menu-item-hover > div > ul > li:nth-child(1)', {timeout:10000}).click();

        // body > div.relative.flex.items-top.justify-center.min-h-screen.bg-gray-100.dark\:bg-gray-900.sm\:items-center.sm\:pt-0 > div > div > div.ml-4.text-lg.text-gray-500.uppercase.tracking-wider
        // 403 
        
        
        cy.get('body > div.relative > div > div > div.ml-4.text-lg.text-gray-500.uppercase.tracking-wider', {timeout: 10000}).then($value => {
            const textValue = $value.text();
            cy.log('textValue :: ' + textValue );
            expect(textValue).to.include('User does not have the right roles.');
        });

         
});

// cy.AppJusticityDashboardNav();
Cypress.Commands.add('AppJusticityDashboardNav', () => {
  cy.log(' -- AppJusticityDashboardNav functions --')


// Nav verticale
cy.log('\n--- Nav verticale')

// Mes Médiations
cy.log('\n--- Mes Médiations')
cy.get('#kt_aside_toggle', {timeout:10000}).click({force: true});
cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu', {timeout:10000}).click();
cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu.menu-item-open > div > ul > li:nth-child(2)', {timeout:10000}).click();


// Médiations JustiCity
cy.log('\n--- Médiations JustiCity')
cy.get('#kt_aside_toggle', {timeout:10000}).click({force: true});
cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu', {timeout:10000}).click();
cy.get('#kt_aside_menu > ul > li.menu-item.menu-item-submenu.menu-item-open > div > ul > li:nth-child(3)', {timeout:10000}).click();

// Mes médiateurs
cy.log('\n--- Mes médiateurs')
cy.get('#kt_aside_toggle', {timeout:10000}).click({force: true});
cy.get('#kt_aside_menu > ul > li:nth-child(3) > a', {timeout:10000}).click();



// Nav horizontale
cy.log('\n--- Nav horizontale')

// Médiations
cy.log('\n--- Médiations')

// Mes Médiations
cy.log('\n--- Mes Médiations')
cy.get('#kt_header_menu > ul > li:nth-child(2)', {timeout:10000}).click();
cy.get('#kt_header_menu > ul > li.menu-item.menu-item-submenu.menu-item-rel.menu-item-open-dropdown.menu-item-hover > div > ul > li:nth-child(1)', {timeout:10000}).click();



// Médiations JustiCity
cy.log('\n--- Médiations JustiCity')
cy.get('#kt_header_menu > ul > li:nth-child(2)', {timeout:10000}).click();
cy.get('#kt_header_menu > ul > li.menu-item.menu-item-submenu.menu-item-rel.menu-item-open-dropdown.menu-item-hover > div > ul > li:nth-child(2)', {timeout:10000}).click();

// Ajoutez une médiation
cy.log('\n--- Ajoutez une médiation')
cy.get('#kt_header_menu > ul > li:nth-child(2)', {timeout:10000}).click();
cy.get('#kt_header_menu > ul > li.menu-item.menu-item-submenu.menu-item-rel.menu-item-open-dropdown.menu-item-hover > div > ul > li:nth-child(3)', {timeout:10000}).click();

// Arbitrages
cy.log('\n--- Arbitrages')
cy.get('#kt_header_menu > ul > li:nth-child(3)', {timeout:10000}).click();

// Username
cy.log('\n--- Username')
cy.get('#kt_quick_user_toggle > span.text-dark-50.font-weight-bolder.font-size-base.d-none.d-md-inline.mr-3', {timeout:10000}).click();





});


// cy.AppJusticityDashboardUserSettings();
Cypress.Commands.add('AppJusticityDashboardUserSettings', () => {


  cy.log(' -- AppJusticityDashboardUserSettings functions --')

    // Username
    cy.log('\n--- Username')
    cy.get('#kt_quick_user_toggle > span.text-dark-50.font-weight-bolder.font-size-base.d-none.d-md-inline.mr-3', {timeout:10000}).click();

/*
globalValues.USER_LINK_HREF
globalValues.USER_LINK_LABEL
globalValues.USER_LINK_MUTED_TEXT

 */

    cy.log(globalValues.USER_LINK_HREF)
    cy.log((globalValues.USER_LINK_HREF).length)
    

    // cy.log(globalValues.USER_LINK_LABEL)
    // cy.log(globalValues.USER_LINK_MUTED_TEXT)
    
                    let  css_selector_array=[];
                    for (i=1; i <= ((globalValues.USER_LINK_HREF).length) ; i++) {
                        cy.log(i)
                        cy.log('#kt_quick_user > .offcanvas-content > .navi > a:nth-child('+i+')')
                        css_selector_array.push('#kt_quick_user > .offcanvas-content > .navi > a:nth-child('+i+')');

                    }// EOL



                    cy.get('#kt_quick_user > .offcanvas-content > .navi', { timeout: 10000 }).should('exist');
                    cy.get('#kt_quick_user > .offcanvas-content > .navi', { timeout: 10000 }).should('be.visible');

                            css_selector_array.forEach((value, index) => {
                            cy.log('--- value :: '+value);
                            cy.log('--- index :: '+index);

                            cy.get(css_selector_array[index], { timeout: 10000 }).should('exist')
                            cy.get(css_selector_array[index], { timeout: 10000 }).should('be.visible')
                            
                            cy.get(css_selector_array[index]).should('have.attr', 'href', (globalValues.BASE_URL+globalValues.USER_LINK_HREF[index]) )

                            
                            cy.get(css_selector_array[index], { timeout: 10000 }).then(link => {
                                cy.request(link.prop('href')).its('status').should('eq', 200);
                                });

                                    // Label
                                    cy.get(css_selector_array[index], {timeout: 10000}).then($value => {
                                    const textValue = $value.text();
                                    cy.log('textValue :: ' + textValue );
                                        expect(textValue).to.include( globalValues.USER_LINK_LABEL[index] );
                                        expect(textValue).to.include( globalValues.USER_LINK_MUTED_TEXT[index] );
                                    });


                        }); 


    

});


// cy.AppJusticityDashboardDestination(slug)
Cypress.Commands.add('AppJusticityDashboardDestination', (slug) => {
    cy.log(' -- AppJusticityDashboardDestination functions --')

    cy.log(slug)
    cy.log(globalValues.BASE_URL + slug );
    cy.visit( globalValues.BASE_URL  + slug );
         

        cy.get('#kt_datatable_search_query', { timeout: 10000 }).should('exist');
        cy.get('#kt_datatable_search_query', { timeout: 10000 }).should('be.visible');
        
                    
                for (k=1;k<=9;k++) {
                    
                    cy.get('#kt_content > div.ml-10.mr-10 > div.card.card-custom > div.card-body > div.mb-7 > div > div > div > div:nth-child(2) > div > div > button > div > div > div' , {timeout: 10000}).click({force: true});
                    cy.log('#bs-select-1 > ul > li:nth-child('+k+') > a')
                    cy.get('#bs-select-1 > ul > li:nth-child('+k+') > a' , {timeout: 10000}).click();
                }//EOL
         
                

        cy.get('#kt_content > div.ml-10.mr-10 > div.card.card-custom > div.card-header.flex-wrap.border-0.pt-6.pb-0 > div.card-toolbar > a', { timeout: 10000 }).should('exist');
        cy.get('#kt_content > div.ml-10.mr-10 > div.card.card-custom > div.card-header.flex-wrap.border-0.pt-6.pb-0 > div.card-toolbar > a', { timeout: 10000 }).should('be.visible');
                   
});

/* 
* Filename: amapa_forms.js
*
* */ 


// cy.AppAmapaJusticityScreenOneCheckCode()
Cypress.Commands.add('AppAmapaJusticityScreenOneCheckCode', () => {
    cy.log(' -- AppAmapaJusticityScreenOneCheckCode functions --')

    cy.request( globalValues.BASE_URL).then((response) => {
                        expect(response.status).to.eq(200)
                    });

        cy.visit(globalValues.SLUG_AMAPA_MEDIATION)
        cy.reload()
        cy.wait(globalValues.contentTimerDraft);

        let AMAPA_SCREEN_1_PARTIE_A_FIELDS = [
'#extra_type-0-1',
'#extra_type-0-1 > option:nth-child(1)',
'#extra_type-0-1 > option:nth-child(2)',
'#extra_type-0-1 > option:nth-child(3)',
'#extra_type-0-1 > option:nth-child(4)',
'#extra_sector-1-1',
'#extra_sector-1-1 > option:nth-child(1)',
'#extra_sector-1-1 > option:nth-child(2)',
'#extra_sector-1-1 > option:nth-child(3)',
'#company_type-0-1',
'#company_type-0-1 > option:nth-child(1)',
'#company_type-0-1 > option:nth-child(2)',
'#company_type-0-1 > option:nth-child(3)',
'#company_type-0-1 > option:nth-child(4)',
'#company_type-0-1 > option:nth-child(5)',
'#company_name-0-1',
'#company_legal_form-0-1',
'#company_siren-0-1',
'#firstname-0-1',
'#lastname-0-1',
'#address-0-1',
'#zip_code-0-1',
'#city-0-1',
'#email-0-1',
'#phone-0-1'
];


        AMAPA_SCREEN_1_PARTIE_A_FIELDS.forEach((value, index) => {
                // cy.log('value :: '+value)
                cy.get(value, { timeout: 10000 }).should('exist');
                cy.get(value, { timeout: 10000 }).should('be.visible');

        });
});


// cy.AppAmapaJusticityScreensAll
Cypress.Commands.add('AppAmapaJusticityScreensAll', () => {
    cy.log(' -- AppAmapaJusticityScreensAll functions --')

    cy.request( globalValues.BASE_URL).then((response) => {
                        expect(response.status).to.eq(200)
                    });

        cy.visit(globalValues.SLUG_AMAPA_MEDIATION)
        cy.reload()
        cy.wait(globalValues.contentTimerDraft);

        /* 
        *
        * SCREEN_1 :: PARTIE_A
        */


let AMAPA_SCREEN_1_PARTIE_A_FIELDS = [
'#extra_type-0-1',
'#extra_type-0-1 > option:nth-child(1)',
'#extra_type-0-1 > option:nth-child(2)',
'#extra_type-0-1 > option:nth-child(3)',
'#extra_type-0-1 > option:nth-child(4)',
'#extra_sector-1-1',
'#extra_sector-1-1 > option:nth-child(1)',
'#extra_sector-1-1 > option:nth-child(2)',
'#extra_sector-1-1 > option:nth-child(3)',
'#company_type-0-1',
'#company_type-0-1 > option:nth-child(1)',
'#company_type-0-1 > option:nth-child(2)',
'#company_type-0-1 > option:nth-child(3)',
'#company_type-0-1 > option:nth-child(4)',
'#company_type-0-1 > option:nth-child(5)',
'#company_name-0-1',
'#company_legal_form-0-1',
'#company_siren-0-1',
'#firstname-0-1',
'#lastname-0-1',
'#address-0-1',
'#zip_code-0-1',
'#city-0-1',
'#email-0-1',
'#phone-0-1'
];


        AMAPA_SCREEN_1_PARTIE_A_FIELDS.forEach((value, index) => {
                // cy.log('value :: '+value)
                cy.get(value, { timeout: 10000 }).should('exist');
                cy.get(value, { timeout: 10000 }).should('be.visible');

        });
 
        

      
        // Votre profession
        cy.get('#extra_type-0-1', {timeout:10000})
        .select('Auteur', { force: true })
        .invoke('val')
        .should('eq', 'author')


        // Secteur d'activité
        cy.get('#extra_sector-1-1', {timeout:10000})
        .select('TV', { force: true })
        .invoke('val')
        .should('eq', 'tv')


     
        // Type de secteur
        cy.get('#extra_ss_sector-2-1', {timeout:10000})
        .select('Série-unitaire', { force: true })
        .invoke('val')
        .should('eq', 'serie')



/* 
*
* Vous êtes "Une société commerciale" (commercial)
*
*/

/*
'#company_name-0-1'
'#company_legal_form-0-1'
'#company_siren-0-1'
'#firstname-0-1'
'#lastname-0-1'
'#address-0-1'
'#zip_code-0-1'
'#city-0-1'
'#email-0-1'
'#phone-0-1'

cy.get('#company_name-0-1', {timeout:10000}).type( globalValues.contentArticleInputTitle + ' ' + globalValues.RandomString + ' ' + globalValues.startDateString );

         */


/* 
*
* Vous êtes "Une profession libérale" (liberal)
*
*/


        /*
        cy.log('\n--- CHANCE_1')
        cy.log(globalValues.contentChanceOneGenerated);
        cy.log(globalValues.contentChanceOneFirst)
        cy.log(globalValues.contentChanceOneLast)
        cy.log(globalValues.contentChanceOneAddress)
        cy.log(globalValues.contentChanceOneCity)
        cy.log(globalValues.contentChanceOnePhone)
        cy.log(globalValues.contentChanceOneEmail)
        cy.log(globalValues.contentChanceOneZip)
        
        cy.log('\n--- CHANCE_2')
        cy.log(globalValues.contentChanceTwoGenerated);
        cy.log(globalValues.contentChanceTwoFirst)
        cy.log(globalValues.contentChanceTwoLast)
        cy.log(globalValues.contentChanceTwoAddress)
        cy.log(globalValues.contentChanceTwoCity)
        cy.log(globalValues.contentChanceTwoPhone)
        cy.log(globalValues.contentChanceTwoEmail)
        cy.log(globalValues.contentChanceTwoZip)
        */
               

        cy.wait(globalValues.contentTimerDraft);
        
        cy.get('#firstname-0-1' , {timeout: 10000}).clear();
        cy.get('#firstname-0-1', {timeout:10000}).type(globalValues.contentChanceOneFirst)

        cy.get('#lastname-0-1' , {timeout: 10000}).clear();
        cy.get('#lastname-0-1', {timeout:10000}).type(globalValues.contentChanceOneLast)

        cy.get('#address-0-1' , {timeout: 10000}).clear();
        cy.get('#address-0-1', {timeout:10000}).type(globalValues.contentChanceOneAddress)

        cy.get('#zip_code-0-1' , {timeout: 10000}).clear();
        cy.get('#zip_code-0-1', {timeout:10000}).type(globalValues.contentChanceOneZip)

        cy.get('#city-0-1' , {timeout: 10000}).clear();
        cy.get('#city-0-1', {timeout:10000}).type(globalValues.contentChanceOneCity)
    
        cy.get('#email-0-1' , {timeout: 10000}).clear();
        cy.get('#email-0-1', {timeout:10000}).type(globalValues.contentChanceOneEmail)

        const emailSearch = globalValues.contentChanceOneEmail;

        cy.get('#phone-0-1' , {timeout: 10000}).clear();
        cy.get('#phone-0-1', {timeout:10000}).type(globalValues.contentChanceOnePhone)

        // Voulez-vous ajouter les coordonnées d'un avocat?
        cy.get('#kt_wizard_v1 > div.row.justify-content-center.my-10.px-8.my-lg-15.px-lg-10 > div > form > div.pb-5 > div > div.form-group.row > div > span > label > span' , {timeout: 10000}).click({force: true});
        
        cy.wait(globalValues.contentTimerDraft);
     
        // Avocat specific
        

        cy.get('#lawyer_firstname-0-1' , {timeout: 10000}).clear();
        cy.get('#lawyer_firstname-0-1', {timeout:10000}).type(globalValues.contentChanceTwoFirst)

        cy.get('#lawyer_lastname-0-1' , {timeout: 10000}).clear();
        cy.get('#lawyer_lastname-0-1', {timeout:10000}).type(globalValues.contentChanceTwoLast)

        cy.get('#lawyer_address-0-1' , {timeout: 10000}).clear();
        cy.get('#lawyer_address-0-1', {timeout:10000}).type(globalValues.contentChanceTwoAddress)

        cy.get('#lawyer_email-0-1' , {timeout: 10000}).clear();
        cy.get('#lawyer_email-0-1', {timeout:10000}).type(globalValues.contentChanceTwoEmail)

        cy.get('#lawyer_phone-0-1' , {timeout: 10000}).clear();
        cy.get('#lawyer_phone-0-1', {timeout:10000}).type(globalValues.contentChanceTwoPhone)
  
        
        
        // NEXT TO PARTIE_B
        cy.get('#kt_wizard_v1 > div.row.justify-content-center.my-10.px-8.my-lg-15.px-lg-10 > div > form > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span' , {timeout: 10000}).click({force: true});

        cy.wait(globalValues.contentTimerDraft);

        

        /* 
        *
        * SCREEN_2 :: PARTIE_B
        */


        // Votre profession
        cy.get('#extra_type-0-2', {timeout:10000})
        .select('Producteur', { force: true })
        .invoke('val')
        .should('eq', 'producer')


        // Secteur d'activité
        cy.get('#extra_sector-1-2', {timeout:10000})
        .select('Cinéma', { force: true })
        .invoke('val')
        .should('eq', 'cinema')


     
        // Type de secteur
        cy.get('#extra_ss_sector-2-2', {timeout:10000})
        .select('Animation', { force: true })
        .invoke('val')
        .should('eq', 'animation')



        /*
        cy.log('\n--- CHANCE_3')
        cy.log(globalValues.contentChanceThreeFirst)
        cy.log(globalValues.contentChanceThreeLast)
        cy.log(globalValues.contentChanceThreeAddress)
        cy.log(globalValues.contentChanceThreeCity)
        cy.log(globalValues.contentChanceThreePhone)
        cy.log(globalValues.contentChanceThreeEmail)
        cy.log(globalValues.contentChanceThreeZip)
        
        cy.log('\n--- CHANCE_4')
        cy.log(globalValues.contentChanceFourFirst)
        cy.log(globalValues.contentChanceFourLast)
        cy.log(globalValues.contentChanceFourAddress)
        cy.log(globalValues.contentChanceFourCity)
        cy.log(globalValues.contentChanceFourPhone)
        cy.log(globalValues.contentChanceFourEmail)
        cy.log(globalValues.contentChanceFourZip)
        */



        cy.wait(globalValues.contentTimerDraft);
       
       
        cy.get('#firstname-0-2' , {timeout: 10000}).clear();
        cy.get('#firstname-0-2', {timeout:10000}).type(globalValues.contentChanceThreeFirst)

        cy.get('#lastname-0-2' , {timeout: 10000}).clear();
        cy.get('#lastname-0-2', {timeout:10000}).type(globalValues.contentChanceThreeLast)

        cy.get('#address-0-2' , {timeout: 10000}).clear();
        cy.get('#address-0-2', {timeout:10000}).type(globalValues.contentChanceThreeAddress)

        cy.get('#zip_code-0-2' , {timeout: 10000}).clear();
        cy.get('#zip_code-0-2', {timeout:10000}).type(globalValues.contentChanceThreeZip)

        cy.get('#city-0-2' , {timeout: 10000}).clear();
        cy.get('#city-0-2', {timeout:10000}).type(globalValues.contentChanceThreeCity)

        cy.get('#email-0-2' , {timeout: 10000}).clear();
        cy.get('#email-0-2', {timeout:10000}).type(globalValues.contentChanceThreeEmail)

        cy.get('#phone-0-2' , {timeout: 10000}).clear();
        cy.get('#phone-0-2', {timeout:10000}).type(globalValues.contentChanceThreePhone)


        /* 
        *
        * SCREEN_3 :: OBJET_DU_LITIGE (LITIGATION_OBJECT)
        */


        // NEXT TO LITIGATION_OBJECT
        cy.get('#kt_wizard_v1 > div.row.justify-content-center.my-10.px-8.my-lg-15.px-lg-10 > div > form > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span' , {timeout: 10000}).click({force: true});
        
        cy.wait(globalValues.contentTimerDraft);
        

        // cy.log (globalValues.contentChanceText);

       
      

        // Type de litige
        cy.get('#litigation_type_id', {timeout:10000})
        .select('Médiation auteur/auteur', { force: true })
        .invoke('val')
        .should('eq', '2')



        // Description du litige
        cy.get('#litigation_description' , {timeout: 10000}).clear();
        cy.get('#litigation_description', {timeout:10000}).type(globalValues.contentChanceText)

        cy.get('#kt_wizard_v1 > div.row.justify-content-center.my-10.px-8.my-lg-15.px-lg-10 > div > form > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span' , {timeout: 10000}).click({force: true});
        
        cy.wait(globalValues.contentTimerDraft);
        
        /* 
        *
        * SCREEN_4 :: RECAPITULATIF_DEMANDE (REQUEST_SUMMARY)
        */
      
        cy.get('#swal2-title', {timeout: 10000}).then($value => {
              const textValue = $value.text();
              cy.log('textValue :: ' + textValue );
              expect(textValue).to.include( globalValues.alertRequestSummarySavedFr );
        });

        cy.get('#kt_body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-header > button' , {timeout: 10000}).click({force: true});

        cy.wait(globalValues.contentTimerDraft);

        // Make a screenshot of the full page
        cy.MakeScreenshot('AppAmapaJusticityScreensAll_REQUEST_SUMMARY')
            
/* 
*
* SCREEN_5 :: SOUMETTRE (SUBMIT)
*/      


        // SAUVEGARDEZ VOTRE FORMULAIRE
        cy.get('#kt_content > div > div.col-xl-3 > div.pt-10.pb-10.text-center > div.btn.btn-primary.font-weight-bold.text-uppercase.px-9.py-4.w-100', { timeout: 10000 }).should('exist');
        cy.get('#kt_content > div > div.col-xl-3 > div.pt-10.pb-10.text-center > div.btn.btn-primary.font-weight-bold.text-uppercase.px-9.py-4.w-100', { timeout: 10000 }).should('be.visible');

        cy.get('#kt_content > div > div.col-xl-3 > div.pt-10.pb-10.text-center > div.btn.btn-primary.font-weight-bold.text-uppercase.px-9.py-4.w-100', {timeout: 10000}).then($value => {
                      const textValue = $value.text();
                      cy.log('textValue :: ' + textValue );
                      expect(textValue).to.include( globalValues.SCREEN_5_SAVE_YOUR_FORM_LABEL );
                });


        // SOUMETTRE VOTRE DOSSIER
        cy.get('#kt_content > div > div.col-xl-3 > div.pt-10.pb-10.text-center > div.btn.btn-success.font-weight-bold.text-uppercase.px-9.py-4.w-100.mt-5', { timeout: 10000 }).should('exist');
        cy.get('#kt_content > div > div.col-xl-3 > div.pt-10.pb-10.text-center > div.btn.btn-success.font-weight-bold.text-uppercase.px-9.py-4.w-100.mt-5', { timeout: 10000 }).should('be.visible');

        cy.get('#kt_content > div > div.col-xl-3 > div.pt-10.pb-10.text-center > div.btn.btn-success.font-weight-bold.text-uppercase.px-9.py-4.w-100.mt-5', {timeout: 10000}).then($value => {
                      const textValue = $value.text();
                      cy.log('textValue :: ' + textValue );
                      expect(textValue).to.include( globalValues.SCREEN_5_SUBMIT_YOUR_FILE_LABEL );
                });

        
        cy.wait(globalValues.contentTimerDraft);

        // Submit
        cy.get('#kt_wizard_v1 > div.row.justify-content-center.my-10.px-8.my-lg-15.px-lg-10 > div > form > div.d-flex.justify-content-between.border-top.mt-5.pt-10 > div:nth-child(2) > span' , {timeout: 10000}).click({force: true});
        
        cy.wait(globalValues.contentTimerDraft);



        // Make a screenshot of the full page
        cy.MakeScreenshot('AppAmapaJusticityScreens_All_SUBMIT')

/* 
*
* SCREEN_6 :: DASHBOARD (TABLEAU_DE_BORD)
*/


// See 004_testing_screens_complete_mediation_file_mediateur.cy.js

});

