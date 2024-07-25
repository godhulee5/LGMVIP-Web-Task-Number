document.addEventListener("DOMContentLoaded", () => {
  // Common DOM manipulations or event listeners can be added here
  const navLinks = document.querySelectorAll("header nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
    });
  });
});
