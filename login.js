var objPeople = [
	{
		username: "admin",
		password: "admin",
		location: "users/u1s2r31.html"
	},
	{
		username: "carl",
		password: "carl",
		location: "users/u1s2r32.html"
	},
	{
		username: "clemens",
		password: "clemens",
		location: "users/u1s2r33.html"
	},
	{
	   username: "paul",
	   password: "Schalke04",
	   location: "users/u1s2r34.html"
	},
	{
       username: "loick",
       password: "loick",
       location: "users/u1s2r35.html"	
	}
];

function getInfo() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	var form = document.getElementById("form");
	
	//alert("your username is " + username + "and your password is" + password + ".")
	
	for (var i = 0; i < objPeople.length; i = i + 1) {
		if (username == objPeople[i].username ) {
			if (password == objPeople[i].password ) {
				location.href = objPeople[i].location;
				
			} else {
				alert("Falsches Passwort");
				form.reset();
			}
		}
	}
}