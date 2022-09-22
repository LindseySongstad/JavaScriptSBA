

function validateRegister() {
    //first name check 
    if (document.register.Fname.value == "") {
        alert("Please provide your first name");
        document.register.Fname.focus();
        return false;
    } else { var firstNameValue = document.getElementById("fname").value; }

    // last name check
    if (document.register.Lname.value == "") {
        alert("Please provide your last name ");
        document.register.Lname.focus();
        return false;
    } else { var lastNameValue = document.getElementById("lname").value; }

    // email check
    if (document.register.Email.value == "") {
        alert("Please provide your email ");
        document.register.Email.focus();
        return false;
    } else {
        if (validateEmail()) {
            var emailValue = document.getElementById("email").value;
        }
        else { return false }
    }
    // password check
    if (document.register.Pass.value == "") {
        alert("Please provide your password");
        document.register.Pass.focus();
        return false;
    } else {
        var pass = document.getElementById("pass").value;
        alert("User " + firstNameValue + " " + lastNameValue + "has been registered");
        return true;
    }
}

function validateEmail() {
    var emailValue = document.register.Email.value;
    atIndex = emailValue.indexOf("@");
    dotIndex = emailValue.lastIndexOf(".");
    if (atIndex < 1 || (dotIndex - atIndex < 2)) {
        alert("Please enter correct email address")
        document.register.Email.focus();
        return false;
    }
    else { return true; }
}

function toggle(){
    let choice = document.getElementById("toggle").value;
    if (choice === "register"){
        showRegister();
    }
    if (choice === "login")
    {
        showLogin();
    }
}

function showLogin(){
    document.getElementById("login-container").classList.remove("hidden")
    document.getElementById("register-container").classList.add("hidden")
}

function showRegister(){
    document.getElementById("login-container").classList.add("hidden")
    document.getElementById("register-container").classList.remove("hidden")
}
