var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var url = require('../json/URL.json');

describe("Open Customer Account", function() {

	var Customername = require('../pages/CustomerAccount.js');

	it("Search Name", function() {

		//addcustomer.gotoOpenAccount();
		Customername.yourname("Harry Potter");
		//browser.sleep(1000);
		

		

	});
	
	//check buttons
	
	it("Validate Labels of the Button", function() {

		var lbl = Customername.getbuttonlabels();
	
		lbl.getText().then(function(text) {
			console.log(text);
		});
		
		/*expect(lbl.getText()).toEqual([ 'Transactions', 'Deposit', 'Withdrawl' ]);

		logger.log('info', 'Checking the Button Labels');
		browser.sleep(1000);*/

	});


});