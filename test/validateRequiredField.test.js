var assert = require('chai').assert;	//Chai assertion library
var validInput = require('../app/validatePhoneNumber');
/*
describe("Testing Valid Phone Number", function(){
  //test that a number has been inputted
	it("Input is required", function() {
		assert.isFalse(validInput(' '));
	});
  //test that there are 10 numbers
  it("Input must be numeric", function(){
    assert.isTrue(validInput('5555555555'));
  });

  //test that letters aren't accepted
  it("Input cannot contain a letter", function(){
    assert.isFalse(validInput('a'));
  });

  //test that there are no spaces
  it("Input cannont contain spaces", function(){
    assert.isFalse(validInput(' '));
  });

  //test that there are no symbols
  it("Input cannot contain symbols", function() {
    assert.isFalse(validInput('?'));
  });

  //test that there are no fractions
  it("Input must be integers", function() {
    assert.isFalse(validInput('2.2'));
  });
});
*/
//Email test
/*
describe("Testing Valid Email Address", function(){
  //test something has been inputted
	it("Input is required", function() {
		assert.isFalse(validInput(' '));
	});
	//test that there are no spaces
	it("Input cannont contain spaces", function() {
		assert.isFalse(validInput(' '));
	});
	//test that the @symbol has been included
	it("Input must contain an at symbol", function() {
		assert.isTrue(validInput('@'));
		});
	//test that there are characters before the @symbol
	it("There must be characters before the at symbol", function() {
		assert.isFalse(validInput('@.lucky.com'));
	});
	//test that there are characters after the @symbol
	it("There must be characters after the at symbol", function() {
		assert.isFalse(validInput('example@'));
	});
	//test that the top level domain has 2 or more characters
	it("TLD has two or more characters", function() {
		assert.isFalse(validInput('example@example.a'));
	});
});
*/
//Zip Code Test
/*
describe("Testing Valid Zip Code", function(){
  //test something has been inputted
	it("Input is required", function() {
		assert.isFalse(validInput(' '));
	});
	//test that there are no spaces
	it("Input cannont contain spaces", function() {
		assert.isFalse(validInput(' '));
	});
	//test that letters can't be included
	it("Input cannot contain letters", function() {
		assert.isFalse(validInput('2A'));
	});
	it("Input must contain either five digits or five digits with a hyphen and 4 digits",
	function() {
		assert.isFalse(validInput('4444'));
	});
	it("Input must contain either five digits or five digits with a hyphen and 4 digits", function() {
		assert.isTrue(validInput('44444-4444'));
	});
});
*/
//Test for /<>
describe("Testing for /<>", function(){
  //test something has been inputted
	it("Input is required", function() {
		assert.isFalse(validInput(' '));
	});
	it("Input has /<>", function() {
		assert.isTrue(validInput('example of /<> test'));
	});
});
