document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".login-form form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple hardcoded check for demo purposes
    if (username === "admin" && password === "password") {
      alert("Login successful!");
      window.location.href = "portal.html"; // Redirect to portal page
    } else {
      alert("Invalid username or password.");
    }
  });
});
