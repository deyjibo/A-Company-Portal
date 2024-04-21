document.addEventListener("DOMContentLoaded", function() {
    // Get the registration form
    document.getElementById("registerButton").addEventListener("click", function(event) {
        event.preventDefault();
        // Show an alert when the button is clicked
        alert("Registered Succesfully");
        window.location.href = "login.html";

    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the registration form
    document.getElementById("forgotButton").addEventListener("click", function(event) {
        event.preventDefault();
        // Show an alert when the button is clicked
        alert("Message Sent succesfully");
        window.location.href = "login.html";

    });
});
document.addEventListener("DOMContentLoaded", function() {

    
    // Add an event listener to the update button
    document.getElementById("updateButton").addEventListener("click", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        // Show an alert when the button is clicked
        alert("Your profile has been updated!");
        window.location.href = "login.html";
    });
});