$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/SeleniumTraining/Virtusa/BDD.TTT.Selenium/src/test/java/Features/AmazonFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Validate the amazon application",
  "description": "",
  "id": "validate-the-amazon-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate the title of the home page",
  "description": "",
  "id": "validate-the-amazon-application;validate-the-title-of-the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "fetch and validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 17645454400,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.fetch_and_validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 2013904600,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 4024907000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validate the search item scenario",
  "description": "",
  "id": "validate-the-amazon-application;validate-the-search-item-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "the user is on amazon home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "select the category as Books",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "type the item name as da vinci code",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "click the magnifier button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "AmazonStepDefinition.the_user_is_on_amazon_home_page()"
});
formatter.result({
  "duration": 12669794000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.select_the_category_as_Books()"
});
formatter.result({
  "duration": 3941744800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.type_the_item_name_as_da_vinci_code()"
});
formatter.result({
  "duration": 668410800,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.click_the_magnifier_button()"
});
formatter.result({
  "duration": 6311126000,
  "status": "passed"
});
formatter.match({
  "location": "AmazonStepDefinition.close_the_browser()"
});
formatter.result({
  "duration": 1750560500,
  "status": "passed"
});
});