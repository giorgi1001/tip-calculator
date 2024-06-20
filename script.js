const billInput = document.getElementById("cheki");
const tipButtons = Array.from(document.getElementsByClassName("percente"));
const peopleInput = document.getElementById("adamianebis-raodenoba");
const tipResult = document.getElementById("total1");
const totalResult = document.getElementById("total2");
const reset = document.getElementById("reset");
const peopleZero = document.getElementById("peopleZero");
const percenteButtons = document.querySelector(".select-tip");

let billValue = 0;
let percentValue = 0;
let peopleValue = 0;

billInput.addEventListener("input", (event) => {
  billValue = event.target.value;
  calculation();
  resetColor();
});

// tipButtons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     percentValue = parseInt(event.target.textContent);
//     button.style.backgroundColor = "#26c2ae";
//     button.style.color = "#00474b";

//     calculation();
//     resetColor();
//     buttonReset(button);
//   });
// });

percenteButtons.addEventListener("click", (event) => {
  if (event.target.tagName != "DIV") {
    percentValue = parseInt(event.target.textContent);
    event.target.style.backgroundColor = "#26c2ae";
    event.target.style.color = "#00474b";

    calculation();
    resetColor();
    buttonReset(event.target);
  }
});

peopleInput.addEventListener("input", (event) => {
  peopleValue = event.target.value;
  calculation();
  resetColor();
});

function calculation() {
  const tipResultValue = (billValue * (percentValue / 100)) / peopleValue;
  const totalResultValue = tipResultValue + billValue / peopleValue;

  if (peopleValue > 0 && billValue > 0) {
    tipResult.textContent = tipResultValue.toFixed(2);
    totalResult.textContent = totalResultValue.toFixed(2);
    peopleZero.textContent = "";
  } else if (peopleValue == 0) {
    peopleZero.textContent = "Can't be zero";
  }
}

reset.addEventListener("click", () => {
  billValue = 0;
  percentValue = 0;
  peopleValue = 0;

  billInput.value = "";
  peopleInput.value = "";

  tipResult.textContent = "0.00";
  totalResult.textContent = "0.00";

  peopleZero.textContent = "";
  reset.style.backgroundColor = "";

  tipButtons.forEach((button) => {
    button.style.backgroundColor = "";
    button.style.color = "";
  });
});

function resetColor() {
  if (billValue > 0 || percentValue > 0 || peopleValue > 0) {
    reset.style.backgroundColor = "#26c2ae";
    reset.classList.add("reset-hover");
  }
}
function buttonReset(clickButton) {
  tipButtons.forEach((button) => {
    if (clickButton != button) {
      button.style.backgroundColor = "#00474b";
      button.style.color = "white";
    }
  });
}
