$(function(){

    $("#signup-submit").click(function() {
    	var myemail = $("#username").val();
    	var mypassword = $("#password").val();
    	console.log(email, password);

    	var ref = new Firebase("https://crackling-heat-8990.firebaseio.com");
    	ref.createUser({
 			 email    :  myemail,
 			 password : mypassword
		}, function(error, userData) {
  			if (error) {
    			console.log("Error creating user:", error);
  			} else {
    			console.log("Successfully created user account with uid:", userData.uid);
          localStorage.setItem("Greeting"," back," + myemail);
    			window.location.href="index.html";
  		}
		}); 
		return false;
	});

	$("#logout").click(function() {
		var ref = new Firebase("https://crackling-heat-8990.firebaseio.com");
		ref.unauth();
    localStorage.setItem("Greeting", "");
    console.log(localStorage.Greeting);
		window.location.href="index.html";
	});


    
});