

/*var validatePhoneNumber= 	function phonenumber(inValue) {
		inValue += "";	//turns all inValues into strings
		var phoneno = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
		var testPhone = phoneno.test(inValue);
	  if(testPhone==true)
		{
			return true;
		}
		else
		{
			return false;
		}
	};*/
/*
Email validation function

var validateEmailAddress = function emailAddress(inValue) {
	inValue += "";
	var emailAd = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
	var testEmail = emailAd.test(inValue);
	if(testEmail==true)
	{
		return true;
	}
	else
	{
		return false;
	}
};
*/
/*
var validateZipCode = function zipCode(inValue) {
	inValue += "";
	var zipCo = new RegExp(/^\d{5}$|^\d{5}-\d{4}$/);
	var testZipCode = zipCo.test(inValue);
	if(testZipCode==true)
	{
		return true;
	}
	else
	{
		return false;
	}
};
*/

var validateLocateReplace= function locateReplace(inValue) {
	inValue += "";
	var testLocateReplace = inValue.includes("/<>");
	if(testLocateReplace==true)
	{
		var replace = inValue.replace("/<>", "-");
		return true;
	}
	else
	{
		return false;
	}
};

//module.exports = validatePhoneNumber;
//module.exports = validateEmailAddress;
//module.exports=validateZipCode;
module.exports=validateLocateReplace;
