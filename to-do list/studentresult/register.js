document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Here you would normally send the registration data to the server
    // For this example, we just show a success message and redirect

    alert("Registration successful!");
    window.location.href = "login.html"; // Redirect to login page
  });
});
