

function validateRegister() {
    let flag = true;
    //first name check 
    if (document.register.Fname.value == "") {
        alert("Please provide your first name");
        document.register.Fname.focus();
        flag = false;
    } else { var firstNameValue = document.getElementById("fname").value; }

    // last name check
    if (document.register.Lname.value == "") {
        alert("Please provide your last name ");
        document.register.Lname.focus();
        flag = false;
    } else { var lastNameValue = document.getElementById("lname").value; }

    // email check
    if (document.register.Email.value == "") {
        alert("Please provide your email ");
        document.register.Email.focus();
        flag = false;
    } else {
        var emailValue = document.getElementById("email").value;
        if (!validateEmail(emailValue)) {
            document.register.Email.focus();
            flag = false
        }
    }
    // password check
    if (document.register.Pass.value == "") {
        alert("Please provide your password");
        document.register.Pass.focus();
        flag = false;
    } else {
        var pass = document.getElementById("pass").value;
        alert("User " + firstNameValue + " " + lastNameValue + " has been registered");
    }
    return flag;
}

function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true; 
  } else {
    alert("Invalid email address");
    return false; 
  }
}

function validateLogin(){
    let flag = true;
    var logEmailValue = document.getElementById("logEmail").value;
    if (!validateEmail(logEmailValue)) {
        document.login.logEmail.focus();
        flag = false;
    }
    else {
        alert("User "+ logEmailValue + " has been logged in");
    }
    return flag;
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
