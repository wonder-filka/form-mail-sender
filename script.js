"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);

    let response = await fetch("sendmail.php", {
      method: "Post",
      body: formData,
    });

    if (response.ok) {
      let result = await response.json();
      console.log(result.message);
      form.reset();
    } else {
      alert("Error");
    }
  }
});
