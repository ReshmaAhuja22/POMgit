var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var WithdrawlAmount = require('../pages/CustomerAccount.js');


describe("validate withdrawl Amount", function() {

	

	it("withdrawl amount", function() {

		WithdrawlAmount.clickwithdrawlbtn();
		browser.sleep(2000);
		WithdrawlAmount.withdrawlamount("200000");
		browser.sleep(1000);
		WithdrawlAmount.withdrawl();
		browser.sleep(1000);
		
		
		

	});

});