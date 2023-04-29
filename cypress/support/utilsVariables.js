/*! E2E-FOV-CYPRESS */
/* 
* ***********************************************
*  Filename ::: utilsVariables.js
*  Description :: All elements to debug feature in FOV
* Goal :: Stock mostly Class instantiations and some 
* global constants used throughout these tests
*  Source: https://github.com/cypress-io/testing-workshop-cypress/blob/master/cypress/support/utils',
*  ***********************************************
* 
* Thanks and Grrrrazie 
* Giuseppe "Vonsigliare" Cunsolo for the tip in
* defining the const "globalDataTest"
*  
*/







const { globalValues } = require('../fixtures/allValues');

let deviceType = globalValues.DEVICE_TYPE;

// deviceType
// Instantiate
const { UtilityAmapa } = require('./utilityGetStuffForAmapa');
const userDevice = new UtilityAmapa().getDeviceType(deviceType);


export {
    userDevice,
  }


