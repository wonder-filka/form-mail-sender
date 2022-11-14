"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("contact");
  let userNumber = document.querySelector("#formPhone");
  let labelPhone = document.getElementById("labelPhone");
  let error = false;
  userNumber.addEventListener("input", formValid);
  form.addEventListener("submit", formSend);

  function formValid(input) {
    let numerValue = input.target.value;
    if (isNaN(numerValue)) {
      labelPhone.innerHTML = "Wrong format";
      userNumber.className = "inputWar form_input";
      error = false;
    } else {
      labelPhone.innerHTML = "";
      userNumber.className = "form_input";
      error = true;
    }
  }

  async function formSend(e) {
    e.preventDefault();
    if (error !== false) {
      let formData = new FormData(form);
      console.log(formData);
      let response = await fetch("sendmail.php", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
      } else {
        alert("Ошибка");
      }
    } else {
      return null;
    }
  }
});
