const registrationForm = document.getElementById("registrationForm");
const displayData = document.getElementById("displayData");
const displayName = document.getElementById("displayName");
const displayEmail = document.getElementById("displayEmail");
const displayPhone = document.getElementById("displayPhone");
const displayDob = document.getElementById("displayDob");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get form values
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const dob = document.getElementById("dob").value;

  // Display entered data
  displayName.textContent = fullName;
  displayEmail.textContent = email;
  displayPhone.textContent = phone;
  displayDob.textContent = dob;

  // Show the display area
  displayData.classList.remove("hidden");
});
