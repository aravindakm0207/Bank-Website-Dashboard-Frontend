document
  .querySelector('form[name="register-form"]')
  .addEventListener("submit", validation);

function validation(event) {
  event.preventDefault();

  const form = document.forms["register-form"];
  const name = form["name"].value.trim();
  const phone = form["phone"].value.trim();
  const email = form["email"].value.trim();
  const password = form["password"].value;

  if (name === "") {
    alert("Name is required");
    return;
  }

  if (phone === "" || phone.length !== 10) {
    alert("Phone number must be 10 digits");
    return;
  }

  if (email === "") {
    alert("Email is required");
    return;
  }

  if (password.length < 8 || password.length > 126) {
    alert("Password must be between 8 and 126 characters");
    return;
  }

  const user = { name, phone, email, password };
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("User registered successfully!");
  window.location.href = "accounts.html";
}

const users = JSON.parse(localStorage.getItem("users")) || [];

users.forEach((user, index) => {
  console.log("Name:", user.name);
  console.log("Phone:", user.phone);
  console.log("Email:", user.email);
  console.log("Password:", user.password);
});

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  const msgOutput = document.getElementById("msgOutput");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    localStorage.setItem(
      "contactForm",
      JSON.stringify({ name, email, message })
    );
    msgOutput.textContent = "Message saved locally!";
    contactForm.reset();
  });
}
