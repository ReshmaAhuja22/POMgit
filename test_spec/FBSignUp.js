var base = require('../pages/BasePage.js');
var logger = require('../util/log');
var using = require('jasmine-data-provider');
var url = require('../json/URL.json');

describe("validate facebook sign up form",function(){
	browser.ignoreSynchronization = true;
	var form = require('../pages/Registerform.js');

	it("fill registration form",function(){
		
		form.FName("reshma")
		form.LName("ahuja")
		browser.sleep(1000);
		form.Email("ahuja.resh1@gmail.com");
		form.ConfirmEmail("ahuja.resh1@gmail.com");
		form.PassWord("password1111");
		form.Gender();
		browser.sleep(2000);
		form.CreatAccount();
	});
});

