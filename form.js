const submit = (document.getElementById('submit').onclick = function () {
    const username = document.getElementById('username').value;
    console.log(username);
    const Password = document.getElementById('Password').value;
    console.log(Password);
    const fullName = document.getElementById('fullName').value;
    console.log(fullName);
    const LastName = document.getElementById('LastName').value;
    console.log(LastName);
    const Gender = document.getElementById('Gender').value;
    console.log(Gender);
    const Email = document.getElementById('Email').value;
    console.log(Email);
    const passportAvailability = document.querySelector('input[name="options"]:checked').value;
    console.log("Passport availability:", passportAvailability);

    const checkboxes = document.querySelectorAll('input[name="option"]');
    const checkedDetails = [];
    
});

// document.getElementById('submit').onclick = function () {
//     // Get all checkboxes with the name "option"
//     const checkboxes = document.querySelectorAll('input[name="option"]');
    
//     // Create an array to store the details of checked checkboxes
//     const checkedDetails = [];
    
//     // Loop through each checkbox to check if it's checked
//     checkboxes.forEach(checkbox => {
//         if (checkbox.checked) {
//             // If checked, push its ID and label text to the array
//             checkedDetails.pop({
//                 label: checkbox.nextElementSibling.textContent
//             });
//         }
//     });
    
//     // Log the details of checked checkboxes
//     console.log("Checked checkboxes:", checkedDetails.value);
// };



