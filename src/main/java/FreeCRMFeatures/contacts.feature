Feature: FreeCRMproLoginandMakingContacts

Scenario Outline: Credentials Step

Given owner chilling on loginpage
When owner checked the title
Then owner enter "<username>" and "<password>"
Then owner touching Login Button
Then owner landed in homepage
Then owner touching contacts button
Then owner inserting credentails "<firstname>" and "<lastname>" and "<position>"
Then owner checking saved contacts
Then owner relaxed the browser


Examples:

   |        username           |       |password |    |firstname|       |lastname|    |position|
   |imran_mohamed1986@yahoo.com|       |Test@123 |    |tim      |       |cook    |    |manager |
   |imran_mohamed1986@yahoo.com|       |Test@123 |    |tom      |       |sean    |    |cashier |
