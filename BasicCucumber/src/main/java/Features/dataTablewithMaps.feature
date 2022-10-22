Feature: Orange CRM Login Feature

#Normal login scenario

Scenario: Orange CRM Login Test Scenario
Given user is already on Login Page
#When title of login page is Orange CRM
Then user enters username and password and clicks on login button
| username | password |
| Admin    | admin123 |
Then user is on home page
Then close the browser
