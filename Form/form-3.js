// JavaScript Document

$(document).ready(function() {
 
  $('#my_Form').submit(function(event) {
	  event.preventDefault();
	  
	 
//variables declared to validate the user input
    var fst_name = $('#fstname').val();//var for first name input 
	var mdl_name = $('#mdlname').val();//ar for middle name input
    var lst_name = $('#lstname').val();//var for last name input
	var day = $('#DOB').val();         //var for day of d.o.b input
	var month = $('#MOB').val();	   //var for month of d.o.b input
	var year = $('#YOB').val();		   //var for year of d.o.b input
	var adres = $('#txt_adrs').val();  //var for address input
    var emailID = $('#email').val();   //var for email Id input
	var Mobile = $('#mobile').val();   //var for mobile number input
	var chfile = $('#File').val();
	var churl = $('#URL').val();
	var urlPat = /^(http(s)?:\/\/)?(www)?[a-zA-Z0-9@:%.\/_\-+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;
    
 
    $(".error").remove();// errors get removed once shown on the screen(no errors piling up happens)
 
    if (fst_name.length < 1) {  //validating first name input
      alert("fill first Name");  
		return;
    }
	if (mdl_name.length < 1) {  //validating middle name input
      alert("fill middle Name");
		return;
    }
	  
    if (lst_name.length < 1) {  //validating last name input
      alert("fill last Name");
		return;
    }
	  
	if($('input[name=gender]:checked').length<=0){  //validating whether radio button checked 
		alert("No radio checked");
		return;
	}  
	  
	if (day < 1) {						//validating whether a date in days option is choosed or not
      alert("select a day");
		return;
    }  
	
	if (month < 1) {					//validating whether a month in month option is choosed or not
      alert("select a month");
		return;
    }
	  
	if (year < 1) {						//validating whether  year in year option is choosed or not
      alert("select a year");
		return;
    }  
	  
	if(adres.length < 1){ 				//validating to check whether the address box is filled or not
		$('#txt_adrs').after(alert("address required"));
		return;
	} 	
     
    if (emailID.length < 1) {          //validating to check whether emial field is filled or not
      	$('#email').after(alert("Email field is required"));
		return;
    } 
	var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; 
	  //validating whether the entered email is valid or not
	if(regEx.test(emailID) === false){
		alert("invalid email id");
		return;
	}
	  
	if(Mobile.length < 1){				//to check whether the mobile field is filled or not
		alert("mobile number is required");
		return;
	}
	  
	var mobPat = /^[789][0-9]{9}$/;
	if (mobPat.test(Mobile)===false){   //validating whether the mobile number is valid or not
		alert("invalid mobile number");
		return;
	}
	  
	var abtme = $('#clro').val();
	
	if (abtme.length <1){				//to check whether the 'about you' box is filled or not
		alert("Text area need to be filled (about you)");
		return;
	}
	  
	if (abtme.length <30 || abtme.length >100){		
		//validating to tell the user not to type less than 20 charachter and not more than 100 character if they do!
		alert("write more than 20 char and less than 100 char");
		return;
	}
	
	if(chfile.length ===0){ 			//to check whether a file is choosed or not
		alert("select a file");
		return;
	}  
	  
	if (churl < 1){
		alert ("Url field is required");  //to check url feed filled or not
		return;
	}	
	  
	if (urlPat.test(churl)===false){   //to check whether the url is valid or not
		alert("type valid URL ");
		return;	
	} 
	
	  return false;

 });

});




