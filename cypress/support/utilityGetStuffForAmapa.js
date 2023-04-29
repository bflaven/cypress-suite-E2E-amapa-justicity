/*! amapa-e2e-cypress
*  ***********************************************
*  Filename ::: utilityGetStuffForAmapa.js
* Method 3: Run Your Cypress Tests in Multiple Environments With Cypress Environment Variable and Custom Utility Class
* Source: https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
*  ***********************************************
* 
*/

import {globalValues} from '../fixtures/allValues';

let deviceType = globalValues.DEVICE_TYPE;


export class UtilityAmapa {

    // private class features
  #deviceType;

    constructor(deviceType) {
        
      this.#deviceType = deviceType;

    }//EOC

/*
isMobile: device === 'mobile',
isTablet: device === 'tablet',
isDesktop: device === 'desktop',

https://docs.cypress.io/api/commands/viewport
 */
    getDeviceType(deviceType) {

        switch (deviceType) {

            // mobile and tablet in portrait
            case 'mobile':
                
                
                var userAgent = 'iphone-6';
                var userAgentOrientation = 'portrait'; // portrait or landscape
                var viewportWidth = 375;
                var viewportHeight = 667;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
            break;
            case 'tablet':
                
                var userAgent = 'ipad-2';
                var userAgentOrientation = 'landscape'; // portrait or landscape
                var viewportWidth = 768;
                var viewportHeight = 1024;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
            // mobile and tablet in landscape
            case 'mobile-landscape':
                
                
                var userAgent = 'iphone-6';
                var userAgentOrientation = 'landscape'; // portrait or landscape
                var viewportWidth = 375;
                var viewportHeight = 667;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
            break;
            case 'tablet-landscape':
                
                var userAgent = 'ipad-2';
                var userAgentOrientation = 'landscape'; // portrait or landscape
                var viewportWidth = 768;
                var viewportHeight = 1024;
                
                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
               
        
            break;
            case 'desktop':
                
                /*
                var userAgent = 'macbook-13';
                var userAgentOrientation = 'portrait'; // useless
                var viewportWidth = 1280;
                var viewportHeight = 800;
                */
                var userAgent = 'macbook-16';
                var userAgentOrientation = 'portrait'; // useless
                var viewportWidth = 1536;
                var viewportHeight = 960;

                // See https://docs.cypress.io/api/commands/viewport

                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
                
                
            break;

            // Default is desktop
            default:
                // desktop
                
                var userAgent = 'macbook-16';
                var userAgentOrientation = 'portrait'; // useless
                var viewportWidth = 1536;
                var viewportHeight = 960;
                // See https://docs.cypress.io/api/commands/viewport

                return {userAgent,userAgentOrientation,viewportWidth,viewportHeight};
                
                
            break;

        }// EOS



        }// EOF

}// EOC

        
        

