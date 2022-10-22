package StepDefinations;
import java.util.Map;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataTablesWithAsMaps {
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
			
				@Then("^user enters username and password and clicks on login button$")
				public void user_enters_username_and_password_and_clicks_on_login_button(DataTable abc) throws Throwable {
					
				//List<List<String>> data=credetials.asLists(String.class);
				//For Loop with Maps for parameterize test cases
				for(Map<String,String> data:abc.asMaps(String.class,String.class)){
				
				driver.findElement(By.id("txtUsername")).sendKeys(data.get("username"));
				driver.findElement(By.id("txtPassword")).sendKeys(data.get("password"));
				
				driver.findElement(By.id("btnLogin")).click();
				Thread.sleep(3000);
				if(driver.findElement(By.xpath("//div[@id='branding']//a//img")).isDisplayed()) {
				 System.out.println("You are on right page");
				
				
				
				}else {
					
					System.out.println("Wrong Page");
				}
				}
				}
				
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


			

					
			


