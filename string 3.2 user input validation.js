// Function to validate input and access the secret message
function validateAndAccessSecretMessage() {
    // Get input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const zipCode = document.getElementById("zipCode").value;

    // Combine first name and last name
    const fullName = `${firstName} ${lastName}`;

    // Validate full name length
    if (fullName.length > 20) {
        document.getElementById("errorMessage").textContent = "Full name is too long (more than 20 characters).";
        return; // Stop execution if invalid
    }

    // Validate zip code format (5 digits)
    if (!/^\d{5}$/.test(zipCode)) {
        document.getElementById("errorMessage").textContent = "Invalid zip code format (must be 5 digits).";
        return; // Stop execution if invalid
    }

    // If inputs are valid, show the secret message
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("secretMessage").style.display = "block";
}

// You can add additional JavaScript code for user interactions here.
