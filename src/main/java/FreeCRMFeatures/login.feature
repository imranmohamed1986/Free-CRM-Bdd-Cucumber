Feature: FreeCRMTestSite

#Scenario: Checking Login Page Credentails.
#
#Given user already in LoginSite
#When user successfully verified title
#Then user enter "imran_mohamed1986@yahoo.com" and "Test@123"
#Then user press Login Button
#Then user successfully in homepage
#Then user verified the homepage title
#Then user closed the browser


Scenario Outline: Checking Login Page Credentails.

Given user already in LoginSite
When user successfully verified title
Then user enter "<username>" and "<password>"
Then user press Login Button
Then user successfully in homepage
Then user verified the homepage title
Then user closed the browser

Examples:

  |        username               |           | password  |
  | imran_mohamed1986@yahoo.com   |           | Test@123  | 
  |    Tom1234@yahoo.com          |           | Test@1234 |
  
  