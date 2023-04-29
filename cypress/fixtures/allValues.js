/* require to use chance and faker */
const {fake} = require('faker');
const faker = require("faker");
import Chance from '../support/chance.min.js';

/* Instantiate chance */
const chanceOne = new Chance();
const chanceTwo = new Chance();
const chanceThree = new Chance();
const chanceFour = new Chance();

// allValues.js
const globalValues = {


TOTEM_SHRUG_MAN_SIMPLE_CYPRESS:'¯\_(ツ)_/¯', // globalValues.TOTEM_SHRUG_MAN_SIMPLE_CYPRESS

// BASE_URL
BASE_URL: Cypress.config().baseUrl, // '+globalValues.BASE_URL+'
// Pick a device
DEVICE_TYPE: Cypress.env('DEVICE_TYPE'), // '+globalValues.DEVICE_TYPE+'
APP_MAIN_DOMAIN:Cypress.env('APP_MAIN_DOMAIN'), // '+globalValues.DEVICE_TYPE+'


/*
     * USERS
     * manage password and username for each user
     *
   */
  
// PO
// username: Cypress.env("users").popo.LOGIN_USERNAME, 
// password: Cypress.env("users").popo.LOGIN_PASSWORD, 

// ADMIN
username: Cypress.env("users").admin.LOGIN_USERNAME, 
password: Cypress.env("users").admin.LOGIN_PASSWORD, 

// USER
// username: Cypress.env("users").journalist.LOGIN_USERNAME, 
// password: Cypress.env("users").journalist.LOGIN_PASSWORD, 

  /*
     * LOGIN ROLES
     * Login with differents roles
     *
   */


// PO
username_PO: Cypress.env("users").popo.LOGIN_USERNAME, 
password_PO: Cypress.env("users").popo.LOGIN_PASSWORD, 

// ADMIN
username_ADMIN: Cypress.env("users").admin.LOGIN_USERNAME, 
password_ADMIN: Cypress.env("users").admin.LOGIN_PASSWORD, 

// USER
username_USER: Cypress.env("users").user.LOGIN_USERNAME, 
password_USER: Cypress.env("users").user.LOGIN_PASSWORD, 



// baseUrl
/* New variables for CYPRESS */
TOTEM_TEST_MAN_CYPRESS:'٩(^‿^)۶ --- DONE --- \\(^-^)/',
// '+globalValues.TOTEM_TEST_MAN_CYPRESS+'
// use for  cy.task
TOTEM_TEST_MAN_CYPRESS_CONSOLE:'=== (^-^) ===',

strLength:40, //'+globalValues.strLength+'
timer: 1000, // '+globalValues.timer+'
contentTimerDraft: 4000, // '+globalValues.contentTimerDraft+'
timerNavigation: 3000, // '+globalValues.timerNavigation+'
timerDraftSaving: 10000, // '+globalValues.timerDraftSaving+'
timerLoadingList: 10000, // '+globalValues.timerLoadingList+'
timerUploading: 8000, // '+globalValues.timerUploading+'
timerSearchImage: 8000, // '+globalValues.timerSearchImage+'
contentTimerDraftSaving:10000, // '+globalValues.contentTimerDraftSaving+'
contentTimerDraftSavingVideo:20000, // '+globalValues.contentTimerDraftSavingVideo+'
tagTimerTag:12000, // '+globalValues.tagTimerTag+'
contentTimerDraftSavingMask:20000, // '+globalValues.contentTimerDraftSavingMask+'




/* Keep this if needed */

RandomString: ''+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+'', 

LoremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 

startDateString: ''+(new Date().toString())+'', 


SLUG_AMAPA_MEDIATION:'mediation/3350/amapa',

/* 
*
* SCREEN_1 :: PARTIE_A
*/

// chanceOne
contentChanceOneGenerated:''+(chanceOne.last().toString())+' '+(chanceOne.address().toString())+' '+(chanceOne.city().toString())+' '+(chanceOne.state().toString())+' '+(chanceOne.phone().toString())+' '+(chanceOne.email().toString())+' '+(chanceOne.zip().toString())+'', 


contentChanceOneFirst:''+(chanceOne.first().toString())+'',
contentChanceOneLast:''+(chanceOne.last().toString())+'',
contentChanceOneAddress:''+(chanceOne.address().toString())+'',
contentChanceOneCity:''+(chanceOne.city().toString())+'',
contentChanceOnePhone:''+(chanceOne.phone().toString())+'',
contentChanceOneEmail:''+(chanceOne.email().toString())+'',
contentChanceOneZip:''+(chanceOne.zip().toString())+'',


// chanceTwo
contentChanceTwoGenerated:''+(chanceTwo.last().toString())+' '+(chanceTwo.address().toString())+' '+(chanceTwo.city().toString())+' '+(chanceTwo.state().toString())+' '+(chanceTwo.phone().toString())+' '+(chanceTwo.email().toString())+' '+(chanceTwo.zip().toString())+'', 


contentChanceTwoFirst:''+(chanceTwo.first().toString())+'',
contentChanceTwoLast:''+(chanceTwo.last().toString())+'',
contentChanceTwoAddress:''+(chanceTwo.address().toString())+'',
contentChanceTwoCity:''+(chanceTwo.city().toString())+'',
contentChanceTwoPhone:''+(chanceTwo.phone().toString())+'',
contentChanceTwoEmail:''+(chanceTwo.email().toString())+'',
contentChanceTwoZip:''+(chanceTwo.zip().toString())+'',

/* 
*
* SCREEN_2 :: PARTIE_B
*/

// chanceThree
contentChanceThreeFirst:''+(chanceThree.first().toString())+'',
contentChanceThreeLast:''+(chanceThree.last().toString())+'',
contentChanceThreeAddress:''+(chanceThree.address().toString())+'',
contentChanceThreeCity:''+(chanceThree.city().toString())+'',
contentChanceThreePhone:''+(chanceThree.phone().toString())+'',
contentChanceThreeEmail:''+(chanceThree.email().toString())+'',
contentChanceThreeZip:''+(chanceThree.zip().toString())+'',


// chanceFour
contentChanceFourFirst:''+(chanceFour.first().toString())+'',
contentChanceFourLast:''+(chanceFour.last().toString())+'',
contentChanceFourAddress:''+(chanceFour.address().toString())+'',
contentChanceFourCity:''+(chanceFour.city().toString())+'',
contentChanceFourPhone:''+(chanceFour.phone().toString())+'',
contentChanceFourEmail:''+(chanceFour.email().toString())+'',
contentChanceFourZip:''+(chanceFour.zip().toString())+'',


/* 
*
* SCREEN_3 :: OBJET_DU_LITIGE (LITIGATION_OBJECT)
*/

contentChanceText:''+(chance.paragraph().toString())+'',


/* 
*
* SCREEN_4 :: RECAPITULATIF_DEMANDE (REQUEST_SUMMARY)
*/

alertRequestSummarySavedFr:'Vos informations ont bien été sauvegardées!',

/* 
*
* SCREEN_5 :: SOUMETTRE (SUBMIT)
*/

SCREEN_5_SAVE_YOUR_FORM_LABEL:'SAUVEGARDEZ VOTRE FORMULAIRE',
SCREEN_5_SUBMIT_YOUR_FILE_LABEL:'SOUMETTRE VOTRE DOSSIER',

/* 
*
* SCREEN_6 :: DASHBOARD (TABLEAU_DE_BORD)
*/
DASHBOARD_URL_END_SUBMIT:'https://dev.app.justicity.com/mediation/8/manage',
SCREEN_6_DATE_SUBMIT_LABEL:'Valider mes dates',
DASHBOARD_URL_MAIN:'https://dev.app.justicity.com',



/* 
*
* SCREEN_7 :: USER_SETTING
*/



USER_LINK_HREF:['/profile', '/profile#_professional-informations', '/profile#_company-informations', '/profile#_security-informations', '/profile#_subscriptions-informations', '/profile#_my-orders-information', '/profile#_customization'],


USER_LINK_LABEL:['Mes informations personnelles', 'Mes informations professionnelles', 'Coordonnées de l\'organisation', 'Paramètres d\'accés', 'Mon abonnement', 'Mes commandes', 'Personnalisation'],


USER_LINK_MUTED_TEXT:['Mettez à jour vos informations', 'Mettez à jour vos informations', 'Mettez à jour vos informations', 'Mettez à jour vos accès', 'Mettez à jour votre abonnement', 'Liste de toutes les commandes', 'Personnaliser mon compte'],

/* 
*
* UX/UI :: CHECK_DESTINATIONS
*/

DESTINATION_APP_JUSTICITY_SLUG:['/mediations/externes', '/mediations/justicity', '/invitations'],

DESTINATION_APP_JUSTICITY_LABEL:['Mes Médiations', 'Médiations JustiCity', 'Mes médiateurs'],



DROPDOWN_STATUS_MEDIATIONS_EXTERNES:['Tous', 'Médiation créée', 'Médiation soumise', 'Médiation validée', 'Médiation acceptée par la partie B', 'Médiation configurée par les deux parties', 'Médiation en cours', 'Médiation abandonnée', 'Médiation refusée définitivement', 'Médiation clôturée'],


/* 
*
* UX/UI :: COMPLETE_MEDIATION_SUCCESS
*/

TABS_COMPLETE_MEDIATION_SUCCESS: [
            ['Détail du dossier', 'Récapitulatif du dossier de médiation', '#kt_wizard_v4 > div.wizard-nav > div > div:nth-child(1) > div > div.wizard-label.text-success > div.wizard-desc'],
            ['Préférences de dates', 'Préférences enegistrées !', '#kt_wizard_v4 > div.wizard-nav > div > div:nth-child(2) > div > div.wizard-label.text-success > div.wizard-desc'],
            ['Convention de médiation', 'Convention validée !', '#kt_wizard_v4 > div.wizard-nav > div > div:nth-child(3) > div > div.wizard-label.text-success > div.wizard-desc'],

],

// Tab_2 :: Préférences de dates 
TAB_2_COMPLETE_MEDIATION_SUCCESS_POPUP_H2:'Félicitations',
TAB_2_COMPLETE_MEDIATION_SUCCESS_POPUP_CONTENT:'Vos préférences de dates de médiation ont bien été enregistrées.',
TAB_2_COMPLETE_MEDIATION_SUCCESS_POPUP_BUTTON:'OK',

// Tab_3 :: Convention de médiation
TAB_3_COMPLETE_MEDIATION_SUCCESS_BTN_1:'Valider la convention',
TAB_3_COMPLETE_MEDIATION_SUCCESS_BTN_2:'Télécharger en pdf',
TAB_3_COMPLETE_MEDIATION_SUCCESS_BTN_3:'Envoyer une demande de signature électronique',




// Other
randomXpathLabelPagination:''+(Math.floor(Math.random() * 4) + 1)+'', 



  /*--- END ---*/

};


// do export theme
module.exports = {
  globalValues
}