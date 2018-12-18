var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var logoutandhome = require('../pages/CustomerAccount.js');


describe("validate log out and home page", function() {

	

	it("log out and home page", function() {

		
		logoutandhome.logout();
		browser.sleep(2000);
		logoutandhome.homepage();
		browser.sleep(1000);

	});

});