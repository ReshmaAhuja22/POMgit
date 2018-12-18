
exports.config = {
		
		directConnect: true,
  
		// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [
		
		/*{
			
			
				
			browserName: 'firefox' ,
			maxInstances: 1,
			specs:['../test_spec/BankMgrLogin_spec.js',
      	      '../test_spec/CheckAddOpenSearchCustomer_spec.js' 	],
			
			
			
		},*/
	    {
		    	
		    	
		    		
		    	browserName: 'chrome' ,
		    	/*maxInstances: 1,
		    	specs:[   '../test_spec/BankMgrLogin_spec.js',
	                 '../test_spec/AddCustomerInfo_spec.js',
	                 '../test_spec/OpenAccount_spec.js',
	                 '../test_spec/SearchCustomerAndDelete_spec.js'   ],
	          	*/
		    	
		    },
		
		    
	],
		
		

		    
		framework: 'jasmine2',
  
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		//seleniumAddress: 'http://192.168.99.100:4444/wd/hub',
		
		
		
		suites:{
			
		    mgrlogin:['../test_spec/BankMgrLogin_spec.js'],
		    CheckAddOpenSearch:['../test_spec/CheckAddOpenSearchCustomer_spec.js'],
		    addcustomer:['../test_spec/AddCustomerInfo_spec.js'],
		    openaccount:['../test_spec/OpenAccount_spec.js'],
		    customerlogin:['../test_spec/CustomerLogin_spec.js'],
		    customername:['../test_spec/CustomerName_spec.js'],
		    depositamount:['../test_spec/DepositAmount.js'],
		    withdrawlamount:['../test_spec/WithDrawlAmount.js'],
		    transaction:['../test_spec/Transaction.js'],
		    logoutandhome:['../test_spec/LogOutAndHome.js'],
		    searchcustomer:['../test_spec/SearchCustomerAndDelete_spec.js'],
		    fbsignup:['../test_spec/FBSignUp.js'],
		    
            mgrflow :['../test_spec/BankMgrLogin_spec.js',
            	      '../test_spec/AddCustomerInfo_spec.js',
            	      '../test_spec/OpenAccount_spec.js',
            	      '../test_spec/SearchCustomerAndDelete_spec.js'],
            	      
        customerloginflow :['../test_spec/CustomerLogin_spec.js',
        	               '../test_spec/CustomerName_spec.js',
        	                '../test_spec/DepositAmount.js',
        	                '../test_spec/WithDrawlAmount.js',
        	                '../test_spec/Transaction.js', 
        	                '../test_spec/LogOutAndHome.js'],
            	      
           smoke:['../test_spec/BankMgrLogin_spec.js',
        	      '../test_spec/CheckAddOpenSearchCustomer_spec.js' 	],
        	      
      functional:[   '../test_spec/BankMgrLogin_spec.js',
	                 '../test_spec/AddCustomerInfo_spec.js',
	                 '../test_spec/OpenAccount_spec.js',
	                 '../test_spec/SearchCustomerAndDelete_spec.js'   ]
    	  
    	
			
		},
  
		//specs: ['../test_spec/BankMgrLogin_spec.js'],

		// Options to be passed to Jasmine.
		  jasmineNodeOpts: {
		    defaultTimeoutInterval: 30000
		  },

	onPrepare: function () {


		//browser.ignoreSynchronization=true;

		// Override the timeout for webdriver.
		browser.driver.manage().timeouts().implicitlyWait(10000);

		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport: {
				resultsDir: 'allure-results'
			}
		}));
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});

	}
}