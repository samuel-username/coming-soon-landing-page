const form = document.querySelector("form");
const input = document.querySelector("#email");
const errorOutput = document.querySelector(".errMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target).entries();
  const { email } = Object.fromEntries(formData);
  const errorText = validateEmail(email);
  if (errorText !== "valid") {
    errorOutput.innerText = errorText;
    form.classList.add("formy")
  } else {
    e.target.submit();
  }
})

input.addEventListener("input", e => {
  errorOutput.innerText = "";
  form.classList.remove("formy")
})

function validateEmail(email) {
  if (!email) return 'Email is required';
    
  const isValidEmail = /^\S+@\S+\.\S+$/g;
  if (!isValidEmail.test(email)) {
    return 'Please provide a valid email';
  }
  return 'valid';
}
