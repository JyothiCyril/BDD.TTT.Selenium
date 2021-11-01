Feature: Validate the amazon application

Scenario: Validate the title of the home page
Given the user is on amazon home page
Then fetch and validate the title of the page
Then close the browser

Scenario: Validate the search item scenario
Given the user is on amazon home page
Then select the category as Books
Then type the item name as da vinci code
Then click the magnifier button
Then close the browser