class Justicity {
  
        elements = {
          MyMsg: (msg) => cy.log('In the Class Justicity'),
        };
        


        showMessage(msg) {
            this.elements.MyMsg().log('showMessage :: '+msg);
        
        }


  }// EOC
  export const justicityAction = new Justicity();
