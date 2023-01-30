const input = document.getElementById("input");

const submit = document.getElementById("button");
const error = document.getElementById("error-text");
const sucess = document.getElementById("sucess-text");
const iconError = document.getElementById("icon-error");

function Init() {
  submit.addEventListener("click", function () {
    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(input.value.toLowerCase())) {
      error.style.display = "block";
      iconError.style.display = "block";
      sucess.style.display = "none";
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "hsl(0, 36%, 70%)";
      error.style.display = "none";
      iconError.style.display = "none";
      sucess.style.display = "block";
    }
    input.value = "";
  });
}

Init();