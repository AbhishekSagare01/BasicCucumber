package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features ="C:\\Users\\Abhishek\\eclipse-workspace\\BasicCucumber\\src\\main\\java\\Features\\ScenarioOutline.feature",
		glue={"StepDefinations"},
		plugin= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		monochrome=true,
		dryRun= true,
		strict=true)
				
public class LoginTestRunner {
	

}
