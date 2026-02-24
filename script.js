document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    document.getElementById("message").innerHTML =
        "✅ Thank you " + name + "! You have successfully registered for the Coding Workshop.";

    this.reset();
});