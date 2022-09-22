

function validateRegister() {
    let flag = true;
    var firstNameValue = document.getElementById("fname").value;
    var lastNameValue = document.getElementById("lname").value;
    var emailValue = document.getElementById("email").value;
    if (!validateEmail(emailValue)) {
        document.register.Email.focus();
        flag = false
    }
    if(flag) alert("User " + firstNameValue + " " + lastNameValue + " has been registered");
    return flag;
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

function toggle(){
    let choice = document.getElementById("toggle").value;
    if (choice === "register"){
        document.getElementById("login-container").classList.add("hidden")
        document.getElementById("register-container").classList.remove("hidden")
    }
    if (choice === "login")
    {
        document.getElementById("login-container").classList.remove("hidden")
        document.getElementById("register-container").classList.add("hidden")
    }
}

