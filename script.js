function validEmail(str) {
  //your JS code here.
	let regex=/^[\w+-%_.]+@[\w._-]+\.[a-zA-z]{2,}$/;
	return regex.test(str);
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
