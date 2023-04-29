Feature: 002 :: Testing SCREEN_1 PARTIE_A

  Background: 
    Given The site is UP
  @site @mediation @screen_1 @partie_a @html @structure @mediation
  
  Scenario: 002_1 :: with a FUNCTION :: Launching the check for SCREEN_1 PARTIE_A
     When Viewing "SCREEN_1", "PARTIE_A" to control the code of the page
     And The full code check is made with a function "cy.AppAmapaJusticityScreenOneCheckCode()"
     Then YOU ARE GOOD! "=== (^-^) ==="
  
  Scenario: 002_2 :: with a DATATABLE :: Launching the check for SCREEN_1 PARTIE_A 
     When Loading "SCREEN_1", "PARTIE_A" to check elements in the code
  # | css    | value      |
      | #extra_type-0-1         | #extra_type-0-1 > option:nth-child(2)   | 
      | #extra_sector-1-1       | option:nth-child(2)                     | 
      | #extra_type-0-1         | #company_type-0-1 > option:nth-child(1) | 
      | #extra_sector-1-1       | texte                                   | 
      | #company_type-0-1       | texte                                   | 
      | #company_name-0-1       | texte                                   | 
      | #company_legal_form-0-1 | texte                                   | 
      | #company_siren-0-1      | texte                                   | 
      | #firstname-0-1          | texte                                   | 
      | #lastname-0-1           | texte                                   | 
      | #address-0-1            | texte                                   | 
      | #zip_code-0-1           | texte                                   | 
      | #city-0-1               | texte                                   | 
      | #email-0-1              | texte                                   | 
      | #phone-0-1              | texte                                   | 
     Then YOU ARE GOOD! "=== (^-^) ==="
  
  
