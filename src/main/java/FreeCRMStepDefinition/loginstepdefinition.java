package FreeCRMStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;


public class loginstepdefinition {
 
	WebDriver driver;
	
	@Given("^user already in LoginSite$")
	public void user_already_in_LoginSite() {
		
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		
		
	}
		
	
	@When("^user successfully verified title$")
	public void user_successfully_verified_title(){	
		 
		String Title = driver.getTitle();
		System.out.println("The Page Title is: "+ Title);
		Assert.assertEquals("Cogmento CRM", Title);
	}
	
	@Then("^user enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enter_username_and_password(String username,String password) {
	
	driver.findElement(By.name("email")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
	
	}
	
	
	@Then("^user press Login Button$")
	public void user_press_Login_Button() throws InterruptedException  {
	    
		
	driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();	
	Thread.sleep(5000);
	}

	
	@Then("^user successfully in homepage$")
	public void user_successfully_in_homepage() throws InterruptedException  {
	    
		boolean HomePage =driver.findElement(By.xpath("//span[text()='Mohamed imran']")).isDisplayed();
		Thread.sleep(5000);
		System.out.println("The user name is:" + HomePage);
		Assert.assertTrue(HomePage);
	}
	
	@Then("^user verified the homepage title$")
	public void user_verified_the_homepage_title()  {
	    
		
	String HomepageTitle=driver.getTitle();
	System.out.println("The HomePage Title is: " + HomepageTitle);
	Assert.assertEquals("Cogmento CRM", HomepageTitle);
	}

	
	@Then("^user closed the browser$")
	public void user_closed_the_browser()  {
	    
		driver.quit();
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
