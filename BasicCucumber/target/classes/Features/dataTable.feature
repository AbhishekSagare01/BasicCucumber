Feature: Orange CRM deals feature

Scenario: Orange CRM Login Test using dataTable Scenario
Given user is already on Login Page
When title of login page is Orange CRM
Then user enters username and password
| Admin |admin123 |
Then user clicks on login button
Then user is on home page
Then close the browser