const button = document.getElementById("addNew");
const board = document.getElementById("articles");

button.addEventListener("click", createNew);

function createNew() {
  const title = document.getElementById("title").value;
  const statia = document.getElementById("statia").value;
  const image = document.getElementById("image").value;

  let newsBox = document.createElement("div");
  newsBox.className = "anotherNew";
  let titleElement = document.createElement("h3");
  let contentElement = document.createElement("p");
  let imageElement = document.createElement("img");

  titleElement.textContent = title;
  contentElement.textContent = statia;
  imageElement.src = image;

  newsBox.appendChild(titleElement);
  newsBox.appendChild(contentElement);
  newsBox.appendChild(imageElement);

  board.appendChild(newsBox);

  document.getElementById("title").value = "";
  document.getElementById("statia").value = "";
  document.getElementById("image").value = "";
}

//! დავალება 2

const form = document.getElementById("registerForm");
const registerBtn = document.getElementById("registerBtn");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const nickname = document.getElementById("nickname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const phone = document.getElementById("phone").value;

  let errors = [];

  if (firstName.length < 2 || firstName.length > 12) {
    errors.push("სახელი უნდა იყოს 2-დან 12 სიმბოლომდე");
  }
  if (lastName.length < 4 || lastName.length > 15) {
    errors.push("გვარი უნდა შეიცავდეს 4-დან 15 სიმბოლომდე");
  }
  if (!/^[A-Z]/.test(nickname)) {
    errors.push("მეტსახელი უნდა იწყებოდეს დიდი ასოთი");
  }
  if (email.length < 5) {
    errors.push("ელფოსტა უნდა იყოს მინიმუმ 5 სიმბოლო");
  } else if (
    email.startsWith("@") ||
    email.startsWith(".") ||
    email.endsWith("@") ||
    email.endsWith(".")
  ) {
    errors.push("ელფოსტა არ უნდა იწყებოდეს ან მთავრდებოდეს @ ან . სიმბოლოებით");
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push("ელფოსტა უნდა შეიცავდეს @ და . სიმბოლოებს");
  } else if (email.includes(".@") || email.includes("@.")) {
    errors.push("ელფოსტა არ უნდა შეიცავდეს .@ ან @. თანმიმდევრობას");
  }
  if (password.length < 8) {
    errors.push("პაროლი უნდა იყოს მინიმუმ 8 სიმბოლო");
  }
  if (password !== confirmPassword) {
    errors.push("გამეორებული პაროლი არ ემთხვევა");
  }

  message.textContent = "";
  if (errors.length === 0) {
    message.textContent = "რეგისტრაცია წარმატებით დასრულდა!";
    message.style.color = "green";
    form.reset();
  } else {
    message.innerHTML =
      "შეავსებული ველები უნდა აკმაყოფილებდეს შემდეგ პირობებს:<br>" +
      errors.join("<br>");
    message.style.color = "red";
  }
}
