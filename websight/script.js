document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple form validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("responseMsg").textContent = "Thank you for contacting us!";
    document.getElementById("contactForm").reset();
  } else {
    document.getElementById("responseMsg").textContent = "Please fill in all fields.";
  }
});
