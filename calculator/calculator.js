const display = document.getElementById("display");
const toggle = document.getElementById("toggle");

function appendNumber(number) {
  display.innerText += number;
}

function appendOperator(operator) {
  if (display.innerText.slice(-1).match(/[+\-*/]/)) return;
  display.innerText += operator;
}

function clearDisplay() {
  display.innerText = "";
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});
