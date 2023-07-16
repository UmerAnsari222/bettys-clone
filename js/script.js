let STEPS = 0;
let selectedService = null;

let progressBarButton = document.querySelectorAll(".af-page-button");

const nextButton = document.querySelector("[data-next-button]");

const services = document.querySelector("[data-select-service]").childNodes;
const whatWePolish = document.querySelector(
  "[data-vad-ska-vi-putsa]"
).childNodes;
const propertiesOfWindows = document.querySelector(
  "[data-fönstrens-egenskaper]"
).childNodes;
const needLadder = document.querySelector("[data-behövs-stege]").childNodes;
const frameWash = document.querySelector("[data-karmtvätt]").childNodes;
const accessHome = document.querySelector(
  "[data-tillgång-till-bostaden]"
).childNodes;

const selectHemstädning = getElement("data-select-hemstädning");
//  document.querySelector("[data-select-hemstädning]");
const selectFönsterputsning = getElement("data-select-fönsterputsning");
// document.querySelector("[data-select-fönsterputsning]");
const selectStorstädning = getElement("data-select-storstädning");
//  document.querySelector("[data-select-storstädning]");
const selectFlyttstädning = getElement("data-select-flyttstädning");
// document.querySelector("[data-select-flyttstädning]");

const selectPolishFönster = getElement("data-polish-fönster");
// document.querySelector("[data-polish-fönster]");
const selectPolishInglasad = getElement("data-polish-inglasad");
// document.querySelector("[data-polish-inglasad]");
const selectPolishFönsterBalkong = getElement("data-polish-fönster-balkong");
// document.querySelector("[data-polish-fönster-balkong]");

const selectPropertiesDubbelsidigaFönster = getElement(
  "data-dubbelsidiga-fönster"
);
// document.querySelector("[data-dubbelsidiga-fönster]");
const selectPropertiesEnkelsidigaFönster = getElement(
  "data-enkelsidiga-fönster"
);
// document.querySelector("[data-enkelsidiga-fönster]");
const selectPropertiesEndastUtsida = getElement("data-endast-utsida");
// document.querySelector("[data-endast-utsida]");
const selectPropertiesEndastInsida = getElement("data-endast-insida");
// document.querySelector("[data-endast-insida]");

const selectbehövsJa = getElement("data-behövs-ja");
// document.querySelector("[data-behövs-ja]");
const selectbehövsnej = getElement("data-behövs-nej");
//  document.querySelector("[data-behövs-nej]");
const selectKarmtvättJa = getElement("data-karmtvätt-ja");
//  document.querySelector("[data-karmtvätt-ja]");
const selectKarmtvättnej = getElement("data-karmtvätt-nej");
//  document.querySelector("[data-karmtvätt-nej]");

const selectTillgångöppnar = getElement("data-tillgång-till-bostaden-öppnar");
// document.querySelector("[data-tillgång-till-bostaden-öppnar]");
const selectTillgånglämnar = getElement("data-tillgång-till-bostaden-lämnar");
// document.querySelector("[data-tillgång-till-bostaden-lämnar]");

selectHemstädning.addEventListener("click", (e) => {
  selectedOne(selectHemstädning, services);
  selectedService = "data-gernel-step";

  // document.querySelector("[data-fönsterputsning-step-0]");

  getElement("data-fönsterputsning-step-0").style.display = "none";
});

selectFönsterputsning.addEventListener("click", () => {
  selectedOne(selectFönsterputsning, services);
  selectedService = "data-fönsterputsning-step";
  // document.querySelector("[data-fönsterputsning-step-0]")
  getElement("data-fönsterputsning-step-0").style.display = "block";
});

selectStorstädning.addEventListener("click", () => {
  selectedOne(selectStorstädning, services);
  selectedService = "data-gernel-step";

  // document.querySelector("[data-fönsterputsning-step-0]")
  getElement("data-fönsterputsning-step-0").style.display = "none";
});

selectFlyttstädning.addEventListener("click", () => {
  selectedOne(selectFlyttstädning, services);
  selectedService = "data-gernel-step";

  // document.querySelector("[data-fönsterputsning-step-0]")
  getElement("data-fönsterputsning-step-0").style.display = "none";
});

selectPolishFönster.addEventListener("click", () => {
  selectedOne(selectPolishFönster, whatWePolish);
});

selectPolishInglasad.addEventListener("click", () => {
  selectedOne(selectPolishInglasad, whatWePolish);
});

selectPolishFönsterBalkong.addEventListener("click", () => {
  selectedOne(selectPolishFönsterBalkong, whatWePolish);
});

selectPropertiesDubbelsidigaFönster.addEventListener("click", () => {
  selectedOne(selectPropertiesDubbelsidigaFönster, propertiesOfWindows);
});

selectPropertiesEnkelsidigaFönster.addEventListener("click", () => {
  selectedOne(selectPropertiesEnkelsidigaFönster, propertiesOfWindows);
});

selectPropertiesEndastUtsida.addEventListener("click", () => {
  selectedOne(selectPropertiesEndastUtsida, propertiesOfWindows);
});

selectPropertiesEndastInsida.addEventListener("click", () => {
  selectedOne(selectPropertiesEndastInsida, propertiesOfWindows);
});

selectbehövsJa.addEventListener("click", () => {
  selectedOne(selectbehövsJa, needLadder);
});

selectbehövsnej.addEventListener("click", () => {
  selectedOne(selectbehövsnej, needLadder);
});

selectKarmtvättJa.addEventListener("click", () => {
  selectedOne(selectKarmtvättJa, frameWash);
});

selectKarmtvättnej.addEventListener("click", () => {
  selectedOne(selectKarmtvättnej, frameWash);
});

selectTillgångöppnar.addEventListener("click", () => {
  selectedOne(selectTillgångöppnar, accessHome);
});

selectTillgånglämnar.addEventListener("click", () => {
  selectedOne(selectTillgånglämnar, accessHome);
});

function selectedOne(selectedOne, selectFormWhere) {
  selectedOne.classList.add("selected");
  selectedOne.firstElementChild.setAttribute("checked", true);
  exceptThisAllOtherElementIsFalse(selectedOne, selectFormWhere);
}

function exceptThisAllOtherElementIsFalse(element, selectedFrom) {
  selectedFrom.forEach((service) => {
    if (service.nodeName === "LI") {
      if (element !== service.childNodes[1]) {
        // console.log(service.childNodes[1]);
        service.childNodes[1].classList.remove("selected");
        service.childNodes[1].firstElementChild.setAttribute("checked", false);
      }
    }
  });
}

function nextStep() {
  progressBarButton[STEPS].classList.remove("current");
  progressBarButton[STEPS + 1].classList.add("current", "enabled");
  ++STEPS;
  // console.log(document.querySelector(`[${selectedService}-${--STEPS}]`));

  // console.log(document.querySelector(`[${selectedService}-${STEPS}]`));
  document.querySelector(`[${selectedService}-${STEPS}]`).style.display =
    "block";
}

function getElement(data) {
  return document.querySelector(`[${data}]`);
}

nextButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (!selectedService) return;
  console.log(STEPS);

  if (selectedService === "data-fönsterputsning-step" && STEPS == 0) {
    document.querySelector(`[${selectedService}-${STEPS}]`).style.display =
      "none";
  }

  if (STEPS > 0) {
    document.querySelector(`[${selectedService}-${STEPS}]`).style.display =
      "none";
    // document.querySelector(`[data-välj-tjänst]`)
    getElement("data-välj-tjänst").style.display = "none";
    nextStep();
  } else {
    // document.querySelector(`[data-välj-tjänst]`)
    getElement("data-välj-tjänst").style.display = "none";
    nextStep();
  }
  if (STEPS == 3) {
    getElement("data-next-button").style.display = "none";
    getElement("data-send-button").style.display = "block";
  }
});

getElement("data-next-button").addEventListener("click", (e) => {
  e.preventDefault();
});
