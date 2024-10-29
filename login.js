
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("UserName must be filled out");
      return false;
    }
    else if (x === isAlpha() && x === isNum()) {
      //   text="valid";
      alert("Form Submitted")
      return True;

    }
    else {
      //   text="Not valid"
      alert("form submited")
      return False;
    }
    console.log("HI");



  }
  function num() {

    let y = document.getElementById("name").values;
    let text;
    if (isAlpha(y) && isNum(y)) {
      //   text="valid";
      alert("Input not valid")
    }
    else {
      //   text="Not valid"
      alert("form submited")
    }
    console.log(text)
  }
  function passForm() {
    var password = document.forms["reg"]["pass"].value;
    var confirmPassword = document.forms["reg"]["conpass"].value;
    var phoneNumber = document.forms["reg"]["phone"].value;

    if (password === "" || confirmPassword === "") {
        alert("Please enter the password and confirm it.");
        return false;
    }
    else if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters long.");
        return false;
    }
    else if (!/[A-Z]/.test(password)) {
        alert("Password must contain at least one uppercase letter.");
        return false; 
    }
    else if (!/[a-z]/.test(password)) {
        alert("Password must contain at least one lowercase letter.");
        return false;
    }
    else if (!/[0-9]/.test(password)) {
        alert("Password must contain at least one number.");
        return false;
    }
    else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        alert("Password must contain at least one special character.");
        return false; 
    }
  
    var phonePattern = /^\+\d{1,3}\d{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Invalid Format");
        return false; 
    }
  
    alert("Account Successfully Created");
    return true; 
}
