var SelectWrapper = require('../util/select-wrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var locator = require("../util/customlocators.js");

var CustomerAccount = function(){
	
	this.login = element(by.buttonText("Login"));
	
	
	//deposit
	
     this.depobtn = element(by.xpath("//button[@ng-class='btnClass2']"));
	  
	  this.depamount = element(by.model("amount"));
	  
	  this.clickdeposit = element(by.xpath("//button[.='Deposit']"));
	  
	  //withdrawal
	  
	  this.withdrawlbtn = element(by.buttonText("Withdrawl"));
	  
	  this.withamount = element(by.model("amount"));
	  
	  this.clickwithdrawl = element(by.buttonText("Withdraw"));
	  
	  
	  //transaction
	  this.clicktransaction = element(by.buttonText("Transactions"));
	  
	  //logout
	  this.clicklogout = element(by.buttonText("Logout"));
	  
	  //Homepage
	  this.clickhomepage = element(by.buttonText("Home"));

	  //enter customer name
	  
	  this.yourname = function(customer){

        mySelect.selectByText(customer);
        this.login.click();
        
	
        browser.sleep(3000);
        return this;
	
	};
	
	
	  
	  //deposit amount

    	this.ClickDepositButton = function(){
    		
		this.depobtn.click();
		return this;
		
		
    	};
    	
		this.depositedAmount =function(amount){
		this.depamount.sendKeys(amount);
		return this;
		};
		
		
		this.deposit =function(){
		
		this.clickdeposit.click();
		return this;
		
		
		
	};
	
	//withdrawl amount
	
		this.clickwithdrawlbtn =function(){
			
			this.withdrawlbtn.click();
			return this;
		};
		
		
		this.withdrawlamount = function(amount){
			this.withamount.sendKeys(amount);
			
			return this;
			
		};
		
		this.withdrawl = function(){
			
			this.clickwithdrawl.click();
			return this;
		};
		
		
		//transaction 
		
		this.transaction = function(){
			this.clicktransaction.click();
			return this;
			
		}
		
		//logout
		
		this.logout = function(){
			this.clicklogout.click();
			return this;
		}
		
		//home page
		
		this.homepage = function(){
			this.clickhomepage.click();
			return this;
		}
		
		//display button labels
		
		this.getbuttonlabels = function() {

			var buttons = element.all(by.xpath("//button[contains(@class,'btn btn-lg tab')]"));
			return buttons;
		};
		
		
	
}

module.exports = new CustomerAccount();

