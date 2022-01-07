

### 1 - INSTALL CYPRESS
- https://docs.cypress.io/guides/getting-started/installing-cypress#Installing


### 2- DOWNLOAD REPOSITORY AND INSTALL DEPENDENCIES
```sh
 npm install --force 
```

### 3 - OPEN CYPRESS   - NOTE: FIRST OPENING CYPRESS COULD FAIL,  TRY AGAIN IF THIS IS HAPPENING 
```sh
  npx cypress open 
```

### 3 - RUN CUCUMBER TAGS HEADLESS MODE (REPORT IS GENERATED AUTOMATICALLY)
```sh
 npx cypress-tags run -e TAGS='@tagName'   OR   npx cypress run --spec "cypress/path_to_the _tests"
```

### DELETE FORMER RESULTS
```sh
-  node cypress/reports/setup/delete-results.js
```

### CREATE REPORT
```sh
-   node cypress/reports/setup/report.js  (NEW VERSION WITH SCREENSHOT)
-   node cypress/reports/setup/report_old.js  (OLD VERSION)
```


### PATH FILES
| Plugin       | README                              |
|--------------|-------------------------------------|
| UI           | cypress/integration/features/ui/tests |
| API          | cypress/integration/features/api/tests |
| PAGE OBJECTS | cypress/support/pages               |
| RESULTS & REPORT  | ../results/cypress/reports/               |



