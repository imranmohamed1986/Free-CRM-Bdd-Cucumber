$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/selenium-workspace/FreeCRMproBDD/src/main/java/FreeCRMFeatures/contacts.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRMproLoginandMakingContacts",
  "description": "",
  "id": "freecrmprologinandmakingcontacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Credentials Step",
  "description": "",
  "id": "freecrmprologinandmakingcontacts;credentials-step",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "owner chilling on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "owner checked the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "owner enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "owner touching Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "owner landed in homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "owner touching contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "owner inserting credentails \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "owner checking saved contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "owner relaxed the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "freecrmprologinandmakingcontacts;credentials-step;",
  "rows": [
    {
      "cells": [
        "username",
        "",
        "password",
        "",
        "firstname",
        "",
        "lastname",
        "",
        "position"
      ],
      "line": 18,
      "id": "freecrmprologinandmakingcontacts;credentials-step;;1"
    },
    {
      "cells": [
        "imran_mohamed1986@yahoo.com",
        "",
        "Test@123",
        "",
        "tim",
        "",
        "cook",
        "",
        "manager"
      ],
      "line": 19,
      "id": "freecrmprologinandmakingcontacts;credentials-step;;2"
    },
    {
      "cells": [
        "imran_mohamed1986@yahoo.com",
        "",
        "Test@123",
        "",
        "tom",
        "",
        "sean",
        "",
        "cashier"
      ],
      "line": 20,
      "id": "freecrmprologinandmakingcontacts;credentials-step;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
  "name": "Credentials Step",
  "description": "",
  "id": "freecrmprologinandmakingcontacts;credentials-step;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "owner chilling on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "owner checked the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "owner enter \"imran_mohamed1986@yahoo.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "owner touching Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "owner landed in homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "owner touching contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "owner inserting credentails \"tim\" and \"cook\" and \"manager\"",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "owner checking saved contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "owner relaxed the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "contactsstepdefinition.owner_chilling_on_Loginpage()"
});
formatter.result({
  "duration": 11962255901,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_checked_the_title()"
});
formatter.result({
  "duration": 9758600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imran_mohamed1986@yahoo.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 47
    }
  ],
  "location": "contactsstepdefinition.owner_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 488253300,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_touching_Login_Button()"
});
formatter.result({
  "duration": 5133535500,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_landed_in_homepage()"
});
formatter.result({
  "duration": 5116377701,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_touching_contacts_button()"
});
formatter.result({
  "duration": 6734937400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tim",
      "offset": 29
    },
    {
      "val": "cook",
      "offset": 39
    },
    {
      "val": "manager",
      "offset": 50
    }
  ],
  "location": "contactsstepdefinition.owner_inserting_credentails_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 11498499700,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_checking_saved_contacts()"
});
formatter.result({
  "duration": 93363901,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_relaxed_the_browser()"
});
formatter.result({
  "duration": 1407325201,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Credentials Step",
  "description": "",
  "id": "freecrmprologinandmakingcontacts;credentials-step;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "owner chilling on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "owner checked the title",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "owner enter \"imran_mohamed1986@yahoo.com\" and \"Test@123\"",
  "matchedColumns": [
    0,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "owner touching Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "owner landed in homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "owner touching contacts button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "owner inserting credentails \"tom\" and \"sean\" and \"cashier\"",
  "matchedColumns": [
    4,
    6,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "owner checking saved contacts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "owner relaxed the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "contactsstepdefinition.owner_chilling_on_Loginpage()"
});
formatter.result({
  "duration": 9082733300,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_checked_the_title()"
});
formatter.result({
  "duration": 6941400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imran_mohamed1986@yahoo.com",
      "offset": 13
    },
    {
      "val": "Test@123",
      "offset": 47
    }
  ],
  "location": "contactsstepdefinition.owner_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 389106500,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_touching_Login_Button()"
});
formatter.result({
  "duration": 5143217900,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_landed_in_homepage()"
});
formatter.result({
  "duration": 5100422300,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_touching_contacts_button()"
});
formatter.result({
  "duration": 6772795900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 29
    },
    {
      "val": "sean",
      "offset": 39
    },
    {
      "val": "cashier",
      "offset": 50
    }
  ],
  "location": "contactsstepdefinition.owner_inserting_credentails_firstname_and_lastname_and_position(String,String,String)"
});
formatter.result({
  "duration": 11555291400,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_checking_saved_contacts()"
});
formatter.result({
  "duration": 78334299,
  "status": "passed"
});
formatter.match({
  "location": "contactsstepdefinition.owner_relaxed_the_browser()"
});
formatter.result({
  "duration": 1066356499,
  "status": "passed"
});
});