class justicityLogin {
/*
  elements = {
    usernameInput: () => cy.get("#user-name"),
    passwordInput: () => cy.get("#password"),
    loginBtn: () => cy.get("#login-button"),
    errorMessage: () => cy.get('h3[data-test="error"]'),
  };
*/
/*
cy.get('#kt_login_signin_form > div:nth-child(3) > input').type(user);
cy.get('#kt_login_signin_form > div:nth-child(4) > input').type(password);
cy.get('#kt_login_signin_submit').click();



Ces informations d'identification ne correspondent pas à nos enregistrements

 */

elements = {
    usernameInput: () => cy.get('#kt_login_signin_form > div:nth-child(3) > input'),
    passwordInput: () => cy.get('#kt_login_signin_form > div:nth-child(4) > input'),
    loginBtn: () => cy.get('#kt_login_signin_submit'),
    errorMessage: () => cy.get('#kt_login_signin_form > div:nth-child(3) > span > strong'),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username,password){
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

export const justicitylogin = new justicityLogin();
