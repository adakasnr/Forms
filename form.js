const submit = (document.getElementById('submit').onclick = function () {
    // username
    const username = document.getElementById('username').value;
    const username_error = document.getElementById('username_error');
    console.log(username);
    if (username.length == 0) {
        username_error.innerHTML = "username! is requried";
    } else {
        username_error.innerHTML = "";
    };

    // password
    const Password = document.getElementById('Password').value;
    const Password_error = document.getElementById('Password_error');
    console.log(Password);
    if (Password.length == 0) {
        Password_error.innerHTML = "Enter Password";
    } else {
        Password_error.innerHTML = "";
    }

    // fullname
    const fullName = document.getElementById('fullName').value;
    const fullName_error = document.getElementById('fullName_error');
    console.log(fullName);
    if (fullName.length == 0) {
        fullName_error.innerHTML = "Please Mention your fullname"
    } else {
        fullName_error.innerHTML = ""
    }

    // lastname
    const LastName = document.getElementById('LastName').value;
    const LastName_error = document.getElementById('LastName_error');
    console.log(LastName);
    if (LastName.length == 0) {
        LastName_error.innerHTML = "Please Mention your lastname"
    } else {
        LastName_error.innerHTML = ""
    }

    // gender
    const Gender = document.getElementById('Gender').value;
    const Gender_error = document.getElementById('Gender_error')
    console.log("Gender", Gender);
    if (Gender == "none") {
        Gender_error.innerHTML = "select Gender"
    } else {
        Gender_error.innerHTML = ""
    }
    // DOB
    const DOB = document.getElementById('DOB').value;
    const DOB_error = document.getElementById('DOB_error')
    console.log("DOB",DOB);
    if(DOB == 0 ){
        DOB_error.innerHTML = "Date of Birth is Compulsary"
    }else{
        DOB_error.innerHTML = ""
    }


    // email
    const Email = document.getElementById('Email').value;
    const Email_error = document.getElementById('Email_error')
    console.log(Email);
    if (username.length == 0) {
        Email_error.innerHTML = "enter Email";
    } else {
        Email_error.innerHTML = "";
    };

    // passport
    const passportAvailability = document.querySelector('input[name="options"]:checked');
    debugger
    const passport_error = document.getElementById('passport_error')
    console.log("Passport availability:", passportAvailability);
    if (passportAvailability){
        passport_error.innerHTML = ""
    }else {
        passport_error.innerHTML = "please your Passport availability"
    }

    // checkbox
    const checkboxes = document.querySelectorAll('input[name="Education"]');
    let checkedDetails = [];
    checkboxes.forEach(element => {
        if (element.checked) {
            checkedDetails.push(element.value)
        }
    });
    const Education_error = document.getElementById('Education_error')
    console.log("checkedDetails", checkedDetails);
    if (checkedDetails == 0) {
        Education_error.innerHTML = "Education Qualification is required"
    }else {
        Education_error.innerHTML = ""
    }

});






