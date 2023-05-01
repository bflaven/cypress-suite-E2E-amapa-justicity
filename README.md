# cypress-suite-E2E-amapa-justicity

## Se servir de la suite `cypress-suite-E2E-amapa-justicity`

### Objectif

**La suite cypress-suite-E2E-amapa-justicity teste différents use cases sur la plate-forme de staging de justicity.**

**Les tests sont dans `/cypress/e2e/site`, `/cypress/e2e/features`, `/cypress/e2e/step_definitions`**


Pour éditer les fichiers Gherkin `.feature`, il est possible d'utiliser n'importe quel éditeur e.g. Sublime, VS code avec en complement Tidy Gherkin.


- [Installer Tidy Gherkin sur Chrome](https://chrome.google.com/webstore/detail/tidy-gherkin/nobemmencanophcnicjhfhnjiimegjeo?hl=en-GB)
- https://www.sublimetext.com/
- https://visualstudio.microsoft.com/fr/downloads/


*Il existe plein de de packages (sublime) ou d'extensions (VS code) pour faciliter l'édition des test cypress `*.cy.js` et des gherkin `*.feature`notamment d'autocompletion ou de color coding pour la syntaxe.*



**Arborescence des tests**

```bash
.
├── features
│   ├── 001_login_justicity.feature
│   └── 002_testing_screens_all_amapa.feature
├── site
│   ├── 001_testing_screens_all_amapa.cy.js
│   ├── 002_testing_screens_dashboard_mediateur.cy.js
│   ├── 003_testing_screens_dashboard_user.cy.js
│   └── 004_testing_screens_complete_mediation_file_mediateur.cy.js
├── step_definitions
│   └── Hooks.js
└── webvitals
    ├── 001_web_vitals_defaults.cy.js
    ├── 002_web_vitals_custom.cy.js
    └── 003_web_vitals_report.cy.js

4 directories, 10 files

```

## Présentation de la suite `cypress-suite-E2E-amapa-justicity`

**Dans le répertoire `features`**

- **`001_login_justicity.feature`**
En Gherkin, le test `001_1` se logue avec succès puis teste le "user settings panel". Dans le test `001_1`, il faut remplacer les credentials par les valeurs correctes. Le test `001_2` échoue intentionnellement au login.

- **`002_testing_screens_all_amapa.feature`**
En Gherkin, le test `002_1` checke les écrans SCREEN_1 de la PARTIE_A à l'aide d'une fonction `cy.AppAmapaJusticityScreenOneCheckCode`. Le test `002_2` checke les écrans SCREEN_1 de la PARTIE_A la présence d'éléments dans le code à l'aide d'une DataTable.


**Dans le répertoire `site`**

- **`001_testing_screens_all_amapa.cy.js`**
Le test `001` checke les écrans SCREEN_1 de la PARTIE_A à l'aide d'une fonction `cy.AppAmapaJusticityScreensAll() `. Il parcourt la creation d'une médiation depuis l'AMAPA. Dans ce test, il est possible de choisir le device et il faut remplacer les credentials par les valeurs correctes.

- **`002_testing_screens_dashboard_mediateur.cy.js`**
    - Le test `002_1` checke la navigation principaple une fois logué à l'aide d'une fonction `cy.AppJusticityDashboardNav()`. Dans ce test, il est possible de choisir le device et il faut remplacer les credentials par les valeurs correctes.

    - Le test `002_2` checke le "user settings panel" une fois logué à l'aide d'une fonction `cy.AppJusticityDashboardUserSettings()`.

    - Les tests `002_3`, `002_4` checke les écrans complets de de deux destinations différentes via la fonction `cy.AppJusticityDashboardDestination()`, c'est pour démontrer que l'approche par slug est possible pour s'affranchir de la navigation et des css selectors. Dans ce test, il est possible de choisir le device et il faut remplacer les credentials par les valeurs correctes.

- **`003_testing_screens_dashboard_user.cy.js`**
Le test `003_1` checke les écrans du Dashboard en tant que USER à l'aide d'une fonction `cy.AppAmapaJusticityScreensAll()`. Dans ce test, il est possible de choisir le device et il faut remplacer les credentials par les valeurs correctes.

- **`004_testing_screens_complete_mediation_file_mediateur.cy.js`**
    - Le test `004_1` est identique au test précédent `003_1`.

    - Le test `004_2` checke les écrans du Dashboard en tant que ADMIN à l'aide d'une fonction `cy.AppJusticityDashboardCompleteMediation()`. Dans ce test, il est possible de choisir le device et il faut remplacer les credentials par les valeurs correctes.

**Dans le répertoire `webvitals`**

- **`001_web_vitals_defaults.cy.js`**
Exemple basique d'utilisation de Web Vitals sur le backoffice de justicity

- **`002_web_vitals_custom.cy.js`**
Exemple personnalisé d'utilisation de Web Vitals sur le backoffice de justicity.

- **`003_web_vitals_report.cy.js`**
Exemple personnalisé de Web Vitals sur le backoffice de justicity avec impression d'un rapport d'activité réduit dans le log du test lui-même.

**Définition de Web Vitals**
> Web Vitals is an initiative by Google to provide unified guidance for quality signals that are essential to delivering a great user experience on the web.

Voir plus  https://web.dev/vitals/


## INSTALL
Pour installer la suite E2E-CYPRESS-APPS sur un PC windows ou un MAC via la console.

**Install `cypress-suite-E2E-amapa-justicity` on a Mac**

```bash

# git clone the github directory
git clone https://github.com/bflaven/cypress-suite-E2E-amapa-justicity.git cypress-suite-E2E-amapa-justicity


# create the directory if needed
# cd /Users/[username]/Documents/
# mkdir cypress-suite-E2E-amapa-justicity



# go the directory where the suite cypress-suite-E2E-amapa-justicity E2E live
cd /Users/[username]/Documents/cypress-suite-E2E-amapa-justicity


# install the elements from the package.json
npm install


# open cypress once installed
npx cypress open
npx cypress run


```

**Install `cypress-suite-E2E-amapa-justicity` on a PC**
```bash

# git clone the github directory
git clone https://github.com/bflaven/cypress-suite-E2E-amapa-justicity.git cypress-suite-E2E-amapa-justicity



# create the directory if needed
# d C:\Users\[username]\Documents\
# cypress-suite-E2E-amapa-justicity

# go the directory where the suite cypress-suite-E2E-amapa-justicity E2E live
cd C:\Users\[username]\Documents\cypress-suite-E2E-amapa-justicity
 

# install the elements from the package.json
npm install


# open cypress once installed
npx cypress open
npx cypress run


```

## Explications techniques sur `cypress-suite-E2E-amapa-justicity`


### Fichiers users

**Il faut mettre les bons crédentials dans le fichier `cypress.env.json` pour permmetre au login de fonctionner.**


### Fichiers de configuration

Pour information, le fichier de configuration. Voir `/cypress.config.js`.


### Fichiers de configuration clés-valeurs

Dans le répertoire `cypress/fixtures/`, il y de nombreuses valeurs externalisées et utilisées dans les tests.

### Détails sur les variables d'environnement

Il y a une valeur importante : DEVICE_TYPE.

#### (i) DEVICE_TYPE
**Attention, ce choix possible du device n'est valable que pour les tests en JS `*.cy.js`  dans le répertoire `site`. Il est possible de cibler un terminal particulier e.g desktop, tablet, mobile... etc et donc de faire tourner les tests sur un device en particulier.**

```bash
# DEVICE_TYPE
# For information, default is desktop 
desktop
tablet
mobile
mobile-landscape
tablet-landscape


# DEVICE_TYPE="mobile"; DEVICE_TYPE="tablet" ; DEVICE_TYPE="desktop". By default if you do not pass any parameter, it will be desktop.

# mobile: this value is setting the viewport as a iphone-6 device in portrait.
# tablet: this value is setting the viewport as a ipad-2 device in portrait.
# desktop: this value is setting the viewport as a macbook-13 device.
# mobile-landscape: this value is setting the viewport as a iphone-6 device in landscape .
# tablet-landscape: this value is setting the viewport as a ipad-2 device in landscape.
# default: no value, this value is setting the viewport as a macbook-16 device.


# For viewport as iphone-6, ipad-2, macbook-13, macbook-16. See https://docs.cypress.io/api/commands/viewport.
# The setting are defined inside this class file utilityGetStuffForFov.js in the method DeviceType(deviceType)


```


**Quelques commandes avec la variable d'environnement `DEVICE_TYPE` et d'autre paramètres**
```

npx cypress open --env DEVICE_TYPE="desktop" --config video=false,screenshotOnRunFailure=false

npx cypress open --env DEVICE_TYPE="tablet-landscape" --config video=false,screenshotOnRunFailure=false


npx cypress open --env DEVICE_TYPE="mobile" --config video=false,screenshotOnRunFailure=false

npx cypress open --env DEVICE_TYPE="mobile" --config video=true,screenshotOnRunFailure=true

```




## USING SHORTCUTS

**Here is the command’s complete list available for shortcuts. These commands are defined in `package.json`**
```bash

# more command to select the device

# specify the device

# open E2E in the runner for desktop. d stands for desktop
npm run cy:open:d

# open E2E in the runner for desktop. t stands for tablet
npm run cy:open:t

# open E2E in the runner for desktop. d stands for mobile
npm run cy:open:m

# open E2E in the runner for desktop. d stands for mobile-landscape
npm run cy:open:ml

# open E2E in the runner for desktop. d stands for tablet-landscape
npm run cy:open:tl


# open E2E in the runner
npm run cy:open

# open E2E in the runner with chrome selected
npm run cy:open:chrome

# run E2E in the console the *.cy.js only
npm run cy:run:js

# run E2E in the console the *.feature only
npm run cy:run:feature

# run E2E in the console the *.cy.js and *.feature
npm run cy:run:all

# launch the suite E2E with allure report
npm run cy:run:allure


# SPECIFIC FOR ALLURE
# launch the report with the allure server
npm run allure:serve

# create the allure-report
npm run allure-report

# show history for allure reports, require to have some reports
# so, run a couple of tiles "npm run allure:report"
npm run allure:history

# clean the allure reports, require to run first "npm run allure:report"
npm run allure:clear


# need specific install
npm run cy:run:tags 

```

## PLUGINS

Pour faire fonctionner la suite, il faut lancer la commande `npm install`.

```bash


# launch the install with package.json
npm install

# install plugins
# all this plugins are somehow used in the cypress install used for the suite 
npm install --save-dev cypress
#... etc see package.json for all packages

# how-to install a dependency
npm install -–save-dev <package-name> 

```

## DOCUMENTATION

- Cypress (official)
https://www.cypress.io/

- Table of Contents API Cypress
https://docs.cypress.io/guides/overview/why-cypress

- Cypress on github (official)
https://github.com/cypress-io/


## INSTALL


### REQUIREMENTS


```bash
# INSTALL
# requirement
node -v
npm -v

node -v
# v18.12.1

npx -v
# 9.6.5
```


## VERSION

### Cypress

| ACTION  |  VERSION | DATE  |
|---|---|---|
| **Cypress** | **12.11.0** | **29/04/23**  |

### Node

| ACTION  |  VERSION | DATE  |
|---|---|---|
| **to Node** | **v18.12.1** | **29/01/23**  |



## OTHERS

- A library: This is a library named `chancejs`. Chance is a minimalist generator of random [1] strings, numbers, etc. to help reduce some monotony particularly while writing automated tests or anywhere else you need anything random.
https://chancejs.com/

- A library: This is a library named `day.js`. It is a fast 2kB alternative to Moment.js with the same modern API
https://day.js.org/

- The model project: This is the model project slighly modified `cypress-cucumber-boilerplate-for-e2e-testing` 
More on https://github.com/JoanEsquivel/cypress-cucumber-boilerplate


- A package: `cypress-web-vitals` 
More on https://www.npmjs.com/package/cypress-web-vitals
`npm install --save-dev cypress-web-vitals cypress-real-events`

- A package: `cypress-eslint-preprocessor`  
More on https://www.npmjs.com/package/cypress-eslint-preprocessor
`npm install cypress-eslint-preprocessor --save-dev`

