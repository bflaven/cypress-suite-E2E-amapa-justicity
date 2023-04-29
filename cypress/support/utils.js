/*! amapa-e2e-cypress */
/* 
* ***********************************************
*  Filename ::: utils.js
*  Description :: All elements to debug feature in FOV
*  Goal :: Stock some functions that can be reused 
*  and called in the tests for future usage
*  Source: https://github.com/singhrajkr/CypressJs
*  ***********************************************
*  
*/


export {
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
};



/* String */
function doRandomString () {
    const RandomString = (Math.random().toString(15).substring(8, 13) + Math.random().toString(15).substring(8, 13));
    return RandomString;

}

/* Date */
function dostartDateString () { 
  const startDateString = (new Date().toString());
  return startDateString;
}


// returns a random integer from 1 to 10
function doRandomContentInsert () {
  const RandomContentInsert = (Math.floor(Math.random() * 3) + 2);
  return RandomContentInsert;

}

function doRandomImageInsert () {
  const RandomImageInsert = (Math.floor(Math.random() * 6) + 2);
  return RandomImageInsert;
  // returns a random integer from 1 to 35
}

function doRandomImageInsertSmall () {
  const RandomImageInsertSmall = (Math.floor(Math.random() * 5) + 2);
  return RandomImageInsertSmall;

  // returns a random integer from 1 to 5
}


/* try_windows_ck_editor_6_test.js  */
function doRandomImageInsertCk () {
  const RandomImageInsertCk = (Math.floor(Math.random() * 5) + 2);
  return RandomImageInsertCk;

  // returns a random integer from 1 to 35
}



function doRandomImageInsertContent () {

  /* try_windows_ck_editor_6_test.js */
  // returns a random integer from 1 to 50
  const RandomImageInsertContent = (Math.floor(Math.random() * 5) + 2);
  return RandomImageInsertContent;


}

function doBroadcastDateInput() {

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        
        let todayFr = mm+'/'+dd+'/'+ yyyy;
        let todayEn = yyyy+'/'+mm+'/'+dd;

        // object
        return {todayFr, todayEn};
        
        // array 
        // return [todayFr, todayEn];
         
        /* USAGE
        declare var today = doBroadcastDateInput()
        if object // return {todayFr, todayEn};
        console.log('todayFr :: '+today.todayFr);
        console.log('todayEn :: '+today.todayEn);

        if array // return [todayFr, todayEn];
        console.log('todayFr :: '+today[0]);
        console.log('todayEn :: '+today[1]);

         */

    }

function doRandomTime() {
  
  let hrs = Math.round(Math.random() * 24);
  let mins = Math.round(Math.random() * 60); 
  let hFormat = (hrs<10 ? "0" : "");
  let mFormat = (mins<10 ? "0" : "");
  let pickUpRandomTime = String(hFormat+hrs+ ":" +mFormat+mins+ "");


  return pickUpRandomTime

}

function doRandomBroadcastDateInput() {


        //set a range of years
        let min = 2022;
        let max = 2037;

        // Math.ceil prevents the value from being 0;
        let month = Math.ceil(Math.random() * 12);
        let day = Math.ceil(Math.random() * 28);
        let year = Math.floor(Math.random() * (max - min) + min);

        //this ensures that the format will stay mm/dd/yyyy;
        if(month < 10) {
            month = "0" + month;
        }

        if(day < 10) {
            day = "0" + day;
        }

        let pickUpRandomDateFr = month+'/'+day+'/'+year;
        let pickUpRandomDateEn = year+'/'+month+'/'+day;


        return {pickUpRandomDateFr, pickUpRandomDateEn};

}


function uniqueStringCode(alphaLength) {
    let result = '';
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < alphaLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    result = `${result + Date.now()}`;
    return result;
  }
  
  function generateRandomNum(length) {
    const add = 1;
    let max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
    if (length > max) {
      return generateRandomNum(max) + generateRandomNum(length - max);
    }
    max = Math.pow(10, length + add);
    const min = max / 10; // Math.pow(10, n) basically
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number.toString().substring(add);
  }
  
  
  function randomAlphaCode(strLength) {
    let result = '';
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789';

    const charactersLength = characters.length;
    for (let i = 0; i < strLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  

function generateRandomLetterSource() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}


function generateRandomLetterDestination() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}












