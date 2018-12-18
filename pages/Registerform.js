var SelectWrapper = require('../util/select-wrapper.js');
var bdaymonth=new SelectWrapper(by.id("month"));
var bdaydate=new SelectWrapper(by.id("day"));
var bdayyear=new SelectWrapper(by.id("year"));

var registerform = function(){
	this.firstname = element(by.xpath("j"));
	this.lastname = element(by.name("lastname"));
	this.email = element(by.name("reg_email__"));
	this.confirmemail = element(by.name("reg_email_confirmation__"));
	this.password = element(by.name("reg_passwd__"));
	this.gender = element(by.xpath("//*[@id='u_0_c']"))
	this.click = element(by.xpath("//*[@id='u_0_13']"));
	
	this.FName = function(fname){
		this.firstname.sendKeys(fname);
		return this;
		}
	
	this.LName = function(lname){
		this.lastname.sendKeys(lname);
		return this;
		
	}
	
	this.Email = function(mail){
		this.email.sendKeys(mail);
		return this;
		
	}
	
	this.ConfirmEmail = function(cmail){
		this.confirmemail.sendKeys(cmail);
		return this;
	}
	
	this.PassWord = function(pwd){
		this.password.sendKeys(pwd);
		return this;
	}
	
	this.Gender = function(){
		this.gender.click();
		return this;
	}
	
	this.CreatAccount = function(){
		this.click.click();
		return this;
	}
}

module.exports = new registerform();