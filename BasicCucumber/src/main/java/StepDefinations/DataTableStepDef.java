/*package StepDefinations;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTableStepDef {
	
		WebDriver driver;
		String ExpectedTitle = "OrangeHRM";

		@Given("^user is already on Login Page$")
		public void user_is_already_on_Login_Page() {

			System.setProperty("webdriver.chrome.driver", "C:\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.get("https://opensource-demo.orangehrmlive.com");
			
		}

		@When("^title of login page is Orange CRM$")
		public void title_of_login_page_is_Orange_CRM() {
			System.out.println(ExpectedTitle);
			String title = driver.getTitle();
			Assert.assertEquals(ExpectedTitle, title);

		}
	
		@Then("^user enters username and password$")
		public void user_enters_username_and_password(DataTable credetials) {
		
		//List<List<String>> data=credetials.asLists(String.class);
		List<List<String>> data=credetials.raw();
		driver.findElement(By.id("txtUsername")).sendKeys(data.get(0).get(0));
		driver.findElement(By.id("txtPassword")).sendKeys(data.get(0).get(1));
	   
	}
		
		@Then("^user clicks on login button$")
		public void user_clicks_on_login_button() throws Throwable {
			driver.findElement(By.id("btnLogin")).click();
			Thread.sleep(3000);}
		
		@Then("^user is on home page$")
		public void user_is_on_home_page() {

			String Hometitle = driver.getTitle();
			  Assert.assertEquals(ExpectedTitle, Hometitle);
		}

		@Then("^close the browser$")
		public void close_the_browser()  {
			driver.close();
	}


}
*/