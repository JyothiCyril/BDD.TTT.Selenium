package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features="C:\\Users\\USER\\git\\BDD.TTT.Selenium\\src\\test\\java\\Features\\RediffFeature.feature",
		glue="StepDefinition",
		dryRun=false,
		strict=true,
		monochrome=true,
		format= {"pretty","html:test-output"}	
		
		)

public class RediffTestRunner {

}
