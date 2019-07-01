function verifold() {
	document.getElementById('refine').innerHTML = "Since you're an old student please Call !";
	}
function verinew(){
	document.getElementById('refine').innerHTML = "Since you're a new student please continue !";
}
function dates1(){
	document.getElementById('dates').innerHTML = "Since you are a first secondary student you should be aware that the calsses take place only at Al-salam and only on every sunday & wednesday for no less than 1.5 hours";
}
function dates2(){
	document.getElementById('dates').innerHTML = "Since you are a second secondary student you should be aware that the calsses take place only at Al-salam and only on every monday & thursday for no less than 1.5 hours";
}
function dates3(){
	document.getElementById('dates').innerHTML = "Since you are a third secondary student you should be aware that the calsses take place only at Al-salam and only on every saterday & tuesday for no less than 1.5 hours";
}
function namechk() {
	var sname = document.getElementById('student').value;
	var reg = /^[a-zA-Z\s\'\-]{2,15}$/;
	if (reg.test(sname)) {
		document.getElementById('namechk').innerHTML = "Valid";
	}
	else{
		document.getElementById('namechk').innerHTML = "Please Type a Correct Name";
	}
}

function numchk() {
	var sphone = document.getElementById('phones').value;
	var regp = /^\d{11}$/;
	if (regp.test(sphone)) {
		document.getElementById('phnchk').innerHTML = "Valid";
	}
	else{
		document.getElementById('phnchk').innerHTML = "Please Type a Correct phone";
	}
}



function numchk2() {
	var pphone = document.getElementById('phonep').value;
	var sphone = document.getElementById('phones').value;
	var regp = /^\d{11}$/;
	if (pphone == sphone) {
		document.getElementById('pphnchk').innerHTML = "The two Numbers can't be Identical";
	}else if (regp.test(pphone)) {
		document.getElementById('pphnchk').innerHTML = "Valid";
	}
	else{
		document.getElementById('pphnchk').innerHTML = "Please Type a Correct phone";
	}
}

