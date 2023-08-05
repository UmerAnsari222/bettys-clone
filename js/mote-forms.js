let STEPS = 0;
let selectedService = null;

let progressBarButton = document.querySelectorAll(".af-page-button");
const nextButton = getElement("data-next-mote");

function getElement(data) {
  return document.querySelector(`[${data}]`);
}

function nextStep() {
  progressBarButton[STEPS].classList.remove("current");
  progressBarButton[STEPS + 1].classList.add("current", "enabled");
  ++STEPS;
  // console.log(document.querySelector(`[${selectedService}-${--STEPS}]`));

  // console.log(document.querySelector(`[${selectedService}-${STEPS}]`));
  document.querySelector(`[data-step-${STEPS}]`).style.display = "block";
}

nextButton.addEventListener("click", (e) => {
  console.log("Hello");
  e.preventDefault();
  e.stopPropagation();

  if (STEPS > 0) {
    document.querySelector(`[data-step-${STEPS}]`).style.display = "none";
    nextStep();
  } else if (STEPS == 0) {
    document.querySelector(`[data-step-0]`).style.display = "none";
    nextStep();
  } else {
    nextStep();
  }
  if (STEPS == 3) {
    nextButton.style.display = "none";
    // getElement("data-send-button").style.display = "block";
  }
});
