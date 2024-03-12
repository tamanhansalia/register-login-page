function validateemail() {
    var email = document.getElementById('email');
    var emailerror = document.getElementById('email-error');
    var emailregex = "^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\.[a-zA-Z]{2,4}$"

    if (email.value == '') {
        emailerror.textContent = "Email cannot be empty";
        emailerror.style.color = 'yellow';
        return false;
    }
    else if (!email.value.match(emailregex)) {
        emailerror.textContent = "invalid Email"
        emailerror.style.color = 'red'
        return false;
    }
    else {
        emailerror.textContent = "Valid Email"
        emailerror.style.color = 'green'
        return true;
    }
}

function validatepassword() {
    var pass = document.getElementById('pass');
    var conpass = document.getElementById('con-pass');
    var passerror = document.getElementById('pass-error');
    var conpasserror = document.getElementById('conpass-error')

    if (pass.value == '') {
        passerror.textContent = "Password cannot be empty."
        passerror.style.color = 'yellow';
        return false;
    }
    else if (pass.value.length < 8) {
        passerror.textContent = "Password should have at least 8 characters.";
        passerror.style.color = 'yellow';
        conpasserror.textContent = '';
        return false;
    }
    else if (pass.value != conpass.value) {
        passerror.textContent = '';
        conpasserror.textContent = "Password not Matched"
        conpasserror.style.color = 'red';
        return false;
    }
    else {
        conpasserror.textContent = "Valid Password"
        conpasserror.style.color = 'green';
        return true;
    }
}




// when submitting the page with error its go to default page
var form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    if (!validateEmail() && !validatepassword()) {
        event.preventDefault();
    }
    else {
        location.href = "https://www.tutorix.com";
    }
});
