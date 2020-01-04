//function untuk email

function emailValidity (str) {
	var email = /\d\S+@\S+\.\S+/g;

	if(str == str.match(email)) {
		return true;
	}
	else {
		return false;
	}
}

//function untuk password

function passwordValidity(str) {
	var simbol = /[!@#\$%\^&\*]/g;
	var angka = /\d/g;
	var huruf = /[a-zA-Z]/g;
	if(str.length == 9 && str.match(simbol).length == 2 && str.match(angka).length == 2 && str.match(huruf).length == 5) {
		return true;
	}
	else {
		return false;
	}
}

