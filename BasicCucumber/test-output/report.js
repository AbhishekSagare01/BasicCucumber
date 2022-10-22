$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Abhishek/eclipse-workspace/BasicCucumber/src/main/java/Features/ScenarioOutline.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#With examples Keyword"
    }
  ],
  "line": 2,
  "name": "Login with parameters provided",
  "description": "",
  "id": "login-with-parameters-provided",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Orange CRM Login Test Scenario",
  "description": "",
  "id": "login-with-parameters-provided;orange-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Orange CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-with-parameters-provided;orange-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-with-parameters-provided;orange-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin123"
      ],
      "line": 14,
      "id": "login-with-parameters-provided;orange-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "Abcd",
        "abc@123"
      ],
      "line": 15,
      "id": "login-with-parameters-provided;orange-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Orange CRM Login Test Scenario",
  "description": "",
  "id": "login-with-parameters-provided;orange-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Orange CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Admin\" and \"Admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTablesWithAsMaps.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTablesWithAsMaps.title_of_login_page_is_Orange_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DataTablesWithAsMaps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTablesWithAsMaps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Orange CRM Login Test Scenario",
  "description": "",
  "id": "login-with-parameters-provided;orange-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "title of login page is Orange CRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Abcd\" and \"abc@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DataTablesWithAsMaps.user_is_already_on_Login_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTablesWithAsMaps.title_of_login_page_is_Orange_CRM()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "DataTablesWithAsMaps.user_is_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DataTablesWithAsMaps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});