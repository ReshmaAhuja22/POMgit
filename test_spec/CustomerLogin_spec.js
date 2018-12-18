var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var url = require('../json/URL.json');

describe("Login Test", function() {

	var home_page = require('../pages/HomePage.js');
	var custpage = require('../pages/AddCustomerDetails.js');
	var base = require('../pages/BasePage.js');
	var account = require('../pages/CustomerAccount.js');

	
	it("Login As Customer", function() {

		base.navigatetourl(url.testsiteurl);
		home_page.LoginAsCustomer();
		var title = base.getpagetitle();

		browser.sleep(1000);
		expect(title).toContain("Protractor");

		logger.log('info', 'Login As customer');
		browser.sleep(1000);
		

	});
	
	


});
