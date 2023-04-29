# cypress-suite-E2E-amapa-justicity

## Se servir de la suite `cypress-suite-E2E-amapa-justicity`

### Objectif

**La suite cypress-suite-E2E-amapa-justicity teste différents use cases sur la plate-forme de staging de justicity.**

**Les tests sont dans `/cypress/e2e/site`, `/cypress/e2e/features`, `/cypress/e2e/step_definitions`**


Pour editer les fichiers Gherkin `.feature`, vous pouvez utiliser des editeurs type Sublime, VS code ou/et Tidy Gherkin.

- [Installer Tidy Gherkin sur Chrome](https://chrome.google.com/webstore/detail/tidy-gherkin/nobemmencanophcnicjhfhnjiimegjeo?hl=en-GB)


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
└── step_definitions
    └── Hooks.js
```

## Présentation de la suite `cypress-suite-E2E-amapa-justicity`

**Dans le répertoire `features`**

- **`001_login_justicity.feature`**
- **`002_testing_screens_all_amapa.feature`**

**Dans le répertoire `site`**

- **`001_testing_screens_all_amapa.cy.js`**
- **`002_testing_screens_dashboard_mediateur.cy.js`**
- **`003_testing_screens_dashboard_user.cy.js`**
- **`004_testing_screens_complete_mediation_file_mediateur.cy.js`**


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

**Il faut mettre les bons crédentiels dans le fichier `cypress.env.json` pour permmetre au login de fonctionner.**


### Fichiers de configuration

Pour information, le fichier de configuration. Voir `/cypress.config.js`.


### Fichiers de configuration clés-valeurs

Dans le répertoire `cypress/fixtures/`, il y de nombreuses valeurs externalisées et utilisées dans les tests.

### Détails sur les variables d'environnement

Il y a une valeur importante : DEVICE_TYPE.

#### (i) DEVICE_TYPE
**Il est possible de cibler un terminal particulier e.g desktop, tablet, mobile... etc et donc de faire tourner les tests sur un device en particulier.**

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
# 6.14.15
```


## VERSION

### Cypress

| ACTION  |  VERSION | DATE  |
|---|---|---|
| **Upgrade to Cypress** | **12.11.0** | **29/04/23**  |

### Node

| ACTION  |  VERSION | DATE  |
|---|---|---|
| ~~Install Node~~ | ~~v14.18.1~~ | ~~07/11/22~~  |
| **Upgrade to Node** | **v18.12.1** | **04/01/23**  |


## OTHERS

- Chance is a minimalist generator of random [1] strings, numbers, etc. to help reduce some monotony particularly while writing automated tests or anywhere else you need anything random.


https://chancejs.com/

- Fast 2kB alternative to Moment.js with the same modern API
https://day.js.org/

- cypress-cucumber-boilerplate-for-e2e-testing
https://github.com/JoanEsquivel/cypress-cucumber-boilerplate


