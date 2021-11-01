package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.AmazonPages;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import io.github.bonigarcia.wdm.WebDriverManager;
import junit.framework.Assert;

public class AmazonStepDefinition {
	
	WebDriver driver;
	AmazonPages AmazonOR;
	
	@Given("^the user is on amazon home page$")
	public void the_user_is_on_amazon_home_page(){
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		AmazonOR = new AmazonPages(driver);
		driver.get("https://www.amazon.in/");
		
	}

	@Then("^fetch and validate the title of the page$")
	public void fetch_and_validate_the_title_of_the_page() {
		
		String title = driver.getTitle();
		Assert.assertTrue(title.contains("Amazon"));
		
	}

	@Then("^select the category as Books$")
	public void select_the_category_as_Books() {
		AmazonOR.getCategory().selectByVisibleText("Books");
	}

	@Then("^type the item name as da vinci code$")
	public void type_the_item_name_as_da_vinci_code() {
		AmazonOR.getSearchTxtField().sendKeys("Da vinci code");
		
	}

	@Then("^click the magnifier button$")
	public void click_the_magnifier_button() {
		AmazonOR.getMagnifierBtn().click();
	}

	
	@Then("^close the browser$")
	public void close_the_browser() {
		driver.quit();
	}


}
