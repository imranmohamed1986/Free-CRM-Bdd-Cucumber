package FreeCRMStepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class contactsstepdefinition {

WebDriver driver;
	
	@Given("^owner chilling on loginpage$")
	public void owner_chilling_on_Loginpage() {
		
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://ui.freecrm.com/");
		
		
	}
		
	
	@When("^owner checked the title$")
	public void owner_checked_the_title(){	
		 
		String Title = driver.getTitle();
		System.out.println("The Page Title is: "+ Title);
		Assert.assertEquals("Cogmento CRM", Title);
	}
	
	@Then("^owner enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void owner_enter_username_and_password(String username,String password) {
	
	driver.findElement(By.name("email")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
	
	}
	
	
	@Then("^owner touching Login Button$")
	public void owner_touching_Login_Button() throws InterruptedException  {
	    
		
	driver.findElement(By.xpath("//div[@class='ui fluid large blue submit button']")).click();	
	Thread.sleep(5000);
	}

	
	@Then("^owner landed in homepage$")
	public void owner_landed_in_homepage() throws InterruptedException  {
	    
		boolean HomePage =driver.findElement(By.xpath("//span[text()='Mohamed imran']")).isDisplayed();
		Thread.sleep(5000);
		System.out.println("The user name is:" + HomePage);
		Assert.assertTrue(HomePage);
	}
	
	@Then("^owner touching contacts button$")
	public void owner_touching_contacts_button() throws InterruptedException {
	    
		driver.findElement(By.xpath("(//span[@class='item-text'])[3]")).click();
		Thread.sleep(3000);
		driver.findElement(By.xpath("(//button[@class='ui linkedin button'])[3]")).click();
		Thread.sleep(3000);
		
		
		
	}
	
	@Then("^owner inserting credentails \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void owner_inserting_credentails_firstname_and_lastname_and_position(String firstname, String lastname, String position) throws InterruptedException {
	  
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		Thread.sleep(2000);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		Thread.sleep(2000);
		driver.findElement(By.name("position")).sendKeys(position);
		Thread.sleep(3000);
		driver.findElement(By.xpath("//div//button[@class='ui linkedin button']")).click();
		Thread.sleep(3000);
		
		
	}
	
	
	
	@Then("^owner checking saved contacts$")
	public void owner_checking_saved_contacts() {
		
		boolean usercreate =driver.findElement(By.xpath("//div[@class='ui header item mb5 light-black']")).isDisplayed();
		System.out.println("username is: "+ usercreate);
		Assert.assertTrue(usercreate);
		
		
		
		
	}
	
	@Then("^owner relaxed the browser$")
	public void owner_relaxed_the_browser()  {
		
		
		
		driver.quit();
		
		
		
	}
	
	
	
}
