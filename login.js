
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
    if (password===" " || confirmPassword===" ") {
      alert("Account Successfully Created");
      return true;  // Allow form submission
    } 
    else if(password===confirmPassword){
      alert("Please Enter the password");
      return False;

    }
    else {
      alert("Check Your password");
      return false;  // Prevent form submission
    }
  }