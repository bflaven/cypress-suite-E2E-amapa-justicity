# 000_login_justicity.feature
Feature: 001 :: Justicity Login page

Feature Login page will work depending on the user credentials.

  Background: 
    Given A web browser is at the "Justicity" login page
  
  Scenario: 001_1 :: Justicity Success Login
     When A user enters the username "bruno@flaven.net", the password "Bruno1971", and clicks on the login button
     Then as a user I can access to the User settings panel
  
  Scenario: 001_2 :: Justicity Incorrect Username Login
     When A user provides incorrect credentials, and clicks on the login button
      | username  | password      | 
      | wrongName | wrongPassword | 
     Then The error message "Ces informations d'identification ne correspondent pas à nos enregistrements" is displayed
  
  
  
