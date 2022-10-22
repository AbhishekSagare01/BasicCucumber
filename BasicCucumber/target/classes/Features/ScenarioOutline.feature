#With examples Keyword
Feature: Login with parameters provided 
Scenario Outline: Orange CRM Login Test Scenario
Given user is already on Login Page
When title of login page is Orange CRM
Then user enters "<username>" and "<password>"
Then user clicks on login button
Then user is on home page
Then close the browser


Examples:
  | username | password |
  | Admin    | Admin123 |
  | Abcd     | abc@123  |