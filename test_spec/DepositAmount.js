var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var DepositAmount = require('../pages/CustomerAccount.js');


describe("validate Deposit Amount", function() {

	

	it("deposit Amount", function() {

		DepositAmount.ClickDepositButton();
		browser.sleep(1000);
		DepositAmount.depositedAmount("100000");
		browser.sleep(2000);
		DepositAmount.deposit();
		

	});

});