import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

// For gherkein
import { dataTableUtils } from '../../helpers/DataTable';
import { debug } from '../../helpers/Debug';
import { justicityAction } from '../../helpers/Justicity';


/* 
*
*
* Hooks.js for  JUSTICITY-E2E-CYPRESS
*
**/
import {justicitylogin} from '@pages/JusticityLogin'


/**
* 001_login_justicity.feature
**/

Given("A web browser is at the {string} login page", () => {
  cy.visit("/");
});

When("A user enters the username {string}, the password {string}, and clicks on the login button", (username,password) => {
  justicitylogin.submitLogin(username,password)
  
});

Then("as a user I can access to the User settings panel", () => {
  cy.log('as a user I can access to the User settings panel')
  cy.AppJusticityDashboardUserSettings()
});


When("A user provides incorrect credentials, and clicks on the login button", (table) => {
  table.hashes().forEach((row) => {
    cy.log(row.username);
    cy.log(row.password);
    justicitylogin.submitLogin(row.username, row.password)

  });
});


Then("The error message {string} is displayed", (errorMessage) => {
  justicitylogin.elements.errorMessage().should("have.text", errorMessage);
});

/**
* 002_testing_screens_all_amapa.feature
**/

// Viewing "SCREEN_1", "PARTIE_A" to control the code of the page
When("Viewing {string}, {string} to control the code of the page", () => {
  cy.log('When :: Viewing "SCREEN_1", "PARTIE_A" to control the code of the page')
});



When("The full code check is made with a function {string}", () => {
  cy.log('Then :: The full code check is made with a function "cy.AppAmapaJusticityScreenOneCheckCode()"')
  cy.AppAmapaJusticityScreenOneCheckCode()
});




/* 
*
*
* Hooks.js for  AMAPA-E2E-CYPRESS
*
**/

// The site is UP
Given("The site is UP", () => {
  cy.log('For Given :: The site is UP');
  justicityAction.showMessage('\n--- Justicity testing is on its way')
});






// When Loading "SCREEN_1", "PARTIE_A" to check elements in the code
 
When('Loading {string}, {string} to check elements in the code', function (screenNumber, partName, dataTable) {
        // cy.log('Loading {string}, {string} to check elements');
        // cy.log('screenNumber :: '+screenNumber);
        // cy.log('partName :: '+partName);

              // dataTable         
              const expectedPropertyValuePairs = dataTable.rowsHash();
              
              // cy.log('expectedPropertyValuePairs :: '+expectedPropertyValuePairs)

              Object.entries(expectedPropertyValuePairs).forEach(function (pair) {
                
                cy.log('\n--- FIELD :: '+pair[0])
                cy.log('\n--- VALUE :: '+pair[1])

/*
                cy.request(pair[1]).then((response) => {
                      expect(response.status).to.eq(200)
                });
*/

                  /* insert charles test */

                // cy.visit(pair[1])
                /*
                
                cy.log('\n--- infos éditoriales')
                cy.get('#didomi-notice-agree-button').click();
                cy.get('.m-breadcrumb__list__item__link').should('be.visible');
                cy.get('.m-breadcrumb__list__item__link').should('have.attr', 'href', '/fr/france/');
                cy.get('.m-breadcrumb__list__item__home > svg > path').should('be.visible');
                cy.get('.t-content__title').should('be.visible');
                cy.get('.m-share-bar').should('be.visible');
                cy.get('.m-pub-dates').should('be.visible');
                cy.get('.t-content__main-media > .m-figure > picture > .m-figure__img').should('be.visible');
                cy.get('.t-content__main-media > .m-figure > picture > .m-figure__img').should('have.attr', 'alt', 'Lyon, vue générale (image d\'illustration).');
                cy.get('.t-content__main-media > .m-figure > picture > .m-figure__img').should('have.attr', 'loading', 'eager');
                cy.get('.t-content__main-media > .m-figure > picture > .m-figure__img').should('have.attr', 'src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
                cy.get('.t-content__main-media > .m-figure > picture > .m-figure__img').should(
                'have.attr',
                'srcset',
                'https://s.rfi.fr/media/display/ff371e7a-f4c2-11ea-8193-005056bf87d6/w:246/p:16x9/8dce2e9cc5eb9a29fc01bd4ea975b1ef96385588.jpg 246w,https://s.rfi.fr/media/display/ff371e7a-f4c2-11ea-8193-005056bf87d6/w:388/p:16x9/8dce2e9cc5eb9a29fc01bd4ea975b1ef96385588.jpg 388w,https://s.rfi.fr/media/display/ff371e7a-f4c2-11ea-8193-005056bf87d6/w:720/p:16x9/8dce2e9cc5eb9a29fc01bd4ea975b1ef96385588.jpg 720w,https://s.rfi.fr/media/display/ff371e7a-f4c2-11ea-8193-005056bf87d6/w:980/p:16x9/8dce2e9cc5eb9a29fc01bd4ea975b1ef96385588.jpg 980w'
                );
                cy.get('.m-from-author').should('be.visible');
                cy.get('.m-from-author__name').should('have.attr', 'href', '/fr/auteur/rfi/');
                cy.get('.m-author-n-reading-time__reading-time').should('be.visible');
                cy.get('.t-content__chapo').should('have.class', 't-content__chapo');
                cy.get('.t-content__chapo').should('be.visible');
                cy.get('.t-content__tags__title').should('be.visible');
                cy.get('.m-tags-list').should('be.visible');
                cy.get('.ob-smartfeed-wrapper').should('be.visible');
                cy.get('.o-aside-content').should('be.visible');
                cy.get('.a-aside-title__content').should('be.visible');
                cy.get('.a-tag__wrapper').should('be.visible');
                
                cy.log('\n--- video ME')

                cy.log('\n--- audio ME')


                cy.log('\n--- quote ME')

                cy.log('\n--- tweet embed ME')

                cy.log('\n--- file embed ME')

                cy.log('\n--- slideshow embed ME')

                cy.log('\n--- highlight embed ME')





                */
  
                  /* // end insert charles test */




              });
        

});


/*

// Loading content-type "article" to check elements
When("Loading content-type {string} to check elements", function (content_type, dataTable) {
  // cy.log('For When :: Loading content-type {string} to check elements');
  // cy.log('content_type :: '+content_type);

  dataTable.hashes().forEach((row) => {
                cy.log(row)
                cy.log(row.value)
                // field, value
                // let url = row.value;
                // cy.log(url)

                // cy.request(url).its('status').should('eq', 200)
        
            });
});
*/


/* 
*
*
* Hooks.js for  E2E-FOV-APPS
*
**/


// Here is the URLs list
When('Here is the URLs list', function (table) {
        cy.log('For And :: Here is the URLs list');
        
        table.hashes().forEach((row) => {
                // cy.log(row.value)
                let url = row.value;
                cy.log(url)
                // cy.request(url).its('status').should('eq', 200)
        
            });

});




/* 
*
*
* Hooks.js for E2E-CYPRESS-APPS
*
**/
When("Here is a SOPHISTICATED check for JSON2_MOBILE structure for {string} product", function (guid, dataTable) {
              


              cy.log(guid)

              let guidChecked = api+guid+token;

              cy.request(guidChecked).then((response) => {
                      expect(response.status).to.eq(200)
              });


              // dataTable         
              const expectedPropertyValuePairs = dataTable.rowsHash();
              Object.entries(expectedPropertyValuePairs).forEach(function (pair) {
                      


                          cy.request(guidChecked).then((response) => {
                            
                            cy.log('\n--- FIELD CHECKED :: '+pair[0])
                            cy.log('\n--- VALUE CHECKED :: '+pair[1])

                            // cy.log(response.body.result.list)        

                                  response.body.result.list.forEach((item, index) => {

                                             expect(pair[0]).to.exist;
                                             expect(pair[0]).not.to.be.null
                                             expect(pair[0]).to.have.length.above(0)
                                             expect(pair[0]).to.not.be.empty;

                                              if (pair[1]=='string') {
                                                
                                                    // Keep this one
                                                    expect(pair[0]).to.be.a(pair[1])
                                                    
                                              } else if ( (pair[1]=='array') || (pair[1]=='object') || (pair[1]=='boolean') || (pair[1]=='integer') ) {

                                                  // cy.log('Do nothing for array, object, boolean, integer')

                                              } else {
                                                  cy.log('please define the value!')
                                              }
                                              
                                      });

                          });
              });




        

         /*
              // Body
              cy.request(product).then((response) => {
                expect(response.status).to.eq(200)

                  response.body.result.list.forEach((item, index) => {
               
                      expect(item).to.have.property('nid')
                      expect(item).to.have.property('created')
                      expect(item).to.have.property('changed')
                      expect(item).to.have.property('type')
                      expect(item).to.have.property('title')
                      expect(item).to.have.property('surtitle')


                      expect(item.nid).to.be.a('string')
                      expect(item.created).to.match(/^\d{13}$/)
                      expect(item.changed).to.match(/^\d{13}$/)
                      expect(item.type).to.be.a('string')
                      expect(item.title).to.be.a('string')
                      expect(item.surtitle).to.be.a('string')
                            
                });
            });
            */

});


//

// Loading product "app-podcasts-rfi-fr-get-perspectives-shows" for check JSON structure

When("Loading product {string} for check JSON2_MOBILE structure", (product) => {
  cy.log('Loading product '+product+' for check JSON2_MOBILE structure');
/*
  cy.log(api+skeleton+token)
  cy.request(api+skeleton+token).then((response) => {
          expect(response.status).to.eq(200)
      });
*/
  
});

When('Here is a check for JSON2_MOBILE structure for {string} product', function (guid, table) {
        

        // cy.log(guid)
        // cy.log(api+guid+token)
        let guidChecked = api+guid+token;

        cy.request(guidChecked).then((response) => {
          expect(response.status).to.eq(200)

      });

      table.hashes().forEach((row) => {

        cy.request(guidChecked).then((response) => {
                
                cy.log('\n--- FIELD CHECKED :: '+row.value)
                // cy.log(response.body.result.list)        

                      response.body.result.list.forEach((item, index) => {
                                
                                cy.log('\n------ nid :: '+item.nid)
                                expect(item).to.have.property(row.value)                      
                          });

              });
        });



});


// 001_skeleton_products_success.js


Given("API MEZZO is up and running", () => {
  // cy.log('API MEZZO is up and running');
});


When("For brand {string}, loading skeleton {string}", (brand, skeleton) => {
  // cy.log('For '+brand+' Loading skeleton '+skeleton+'');

  cy.log(api+skeleton+token)
  cy.request(api+skeleton+token).then((response) => {
          expect(response.status).to.eq(200)
      });
  
});


When('For brand {string}, this is the product list', function (brand,table) {
  
  // cy.log('This product list for '+brand+' too');
  
  table.hashes().forEach((row) => {
      // cy.log(row.key)
      cy.log(api+row.value+token)
      let product_item = api+row.value+token;
      
      cy.request(product_item).then((response) => {
          expect(response.status).to.eq(200)
      });
        
      cy.request('GET', product_item)
      .its('body')
      .should('not.be.empty')
      .and('be.a', 'object')
    
  });
});


Then("YOU ARE GOOD! {string}", (Message) => {
    // cy.log('\n --- DONE :: '+Message);


});


// 002_rfi_pure_radio_urls_success.js
When('For {string}, check each URL in the table below for a skeleton', function (brand, table) {
        table.hashes().forEach((row) => {
                // cy.log(row.value)
                let url = row.value;
                cy.log(url)
                cy.request(url).its('status').should('eq', 200)
        
            });

});



Then("It is done! {string}", (msg) => {
    cy.log('msg :: '+msg);
    // loginPage.elements.errorMessage().should("have.text", errorMessage);
    // loginPage instantiate Class
    // elements.errorMessage method
    // loginPage.submitLogin(row.username, row.password)
    
    /*
    *
    * attempt with a class if needed just for the fun....
    * 
     */
    
    /*
    debug.elements.MyVarOne()
    debug.elements.MyVarTwo()
    debug.typeMessage('some class for debug')
    */



});


/*
// Here is the URLs list
When('Check content :: {string}', function (type, table) {

                
          table.hashes().forEach((row) => {

                let counter = 0;
                counter++;
                      // cy.log(row.value)
                let url = row.value;
                cy.log('CASE_'+counter)
                cy.log(url)
                cy.request(url).its('status').should('eq', 200)


        if (type=='editorial_info') {

          cy.log('\n--- type ::: '+type)
                charles.checkInfosEditoriales(url)

            

        } else if(type=='video_ME')  {

          cy.log('\n--- type ::: '+type)

                charles.checkVideoMe(url)

        } else if(type=='audio_ME')  {
           

                charles.checkAudioMe(url)
      

        } else if(type=='quote_ME')  {

                charles.checkQuoteMe(url)
        
        } else if(type=='tweet_embed_ME')  {

                charles.checkTweetEmbedMe(url)
   
        
        } else if(type=='file_embed_ME')  {
 
                charles.checkFileEmbedMe(url)
 

        } else if(type=='slideshow_embed_ME')  {

                charles.checkSlideshowEmbedMe(url)
        
        } else if(type=='slideshow_embed_ME')  {

                charles.checkHighlightEmbedMe(url)



        } else if(type=='header_edition')  {

                charles.checkHeaderEdition(url)


        } else if(type=='header_direct_monde')  {

                charles.checkLiveHeaderDirectMonde(url)


        } else if(type=='header_direct_afrique')  {

                charles.checkLiveHeaderDirectAfrique(url)

        } else if(type=='smartfeed')  {

                        charles.checkLiveSmartfeed(url)

        } else if(type=='header')  {

                        charles.checkNavHeader(url)
                        
        } else if(type=='bottom_bar')  {

                        charles.checkNavBottomBar(url)
                        
        } else if(type=='section')  {

                        charles.checkSection(url)
                        
        } else if(type=='thematic')  {

                        charles.checkThematicTags(url)

        } else {
           
           cy.log('\n--- no type defined ')

        }
        
        });


});


// Here is the URLs list
When('The items are this URLs list', function (table) {
        cy.log('For And :: Here is the URLs list');
        
        let counter = 0;

        table.hashes().forEach((row) => {
          counter++;
                // cy.log(row.value)
                let url = row.value;
                cy.log('CASE_'+counter)
                cy.log(url)
                cy.request(url).its('status').should('eq', 200)
                

                cy.log('\n--- infos éditoriales')
                cy.visit(url, {timeout: 10000})
                cy.reload({timeout: 10000})
                // cy.get('#didomi-notice-agree-button').click();
                
                // charles.checkInfosEditoriales(url)

            });

});



 */
