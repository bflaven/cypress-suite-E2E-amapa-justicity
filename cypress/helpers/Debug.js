class Debug {
  elements = {
    MyVarOne: () => cy.log('MyVarOne'),
    MyVarTwo: () => cy.log('MyVarTwo'),
    MyVarThree: (msg) => cy.log(msg),
  };

  showVarOne() {
    this.elements.MyVarOne();
  }

  showVarOne() {
    this.elements.MyVarOne();
  }
  typeMessage(msg) {
    this.elements.MyVarThree(msg);
  }
}

export const debug = new Debug();
