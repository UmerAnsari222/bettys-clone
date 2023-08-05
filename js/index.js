const tjänsterDropDown = getElement("data-tjänster-drop-down");
const städhemsidaDropDown = getElement("data-om-städhemsida-drop-down");
const attKundDropDown = getElement("data-att-vara-kund-drop-down");

tjänsterDropDown.addEventListener("click", (e) => {
  console.log("Hell");
  e.stopPropagation();

  if (getElement("data-submenu-tjänster").classList.contains("is-active")) {
    getElement("data-submenu-tjänster").style.display = "none";
    getElement("data-submenu-tjänster").classList.remove("is-active");
  } else {
    getElement("data-submenu-tjänster").style.display = "block";
    getElement("data-submenu-tjänster").classList.add("is-active");
  }
});

städhemsidaDropDown.addEventListener("click", (e) => {
  console.log("Hell");
  e.stopPropagation();

  if (
    getElement("data-submenu-om-städhemsida").classList.contains("is-active")
  ) {
    getElement("data-submenu-om-städhemsida").style.display = "none";
    getElement("data-submenu-om-städhemsida").classList.remove("is-active");
  } else {
    getElement("data-submenu-om-städhemsida").style.display = "block";
    getElement("data-submenu-om-städhemsida").classList.add("is-active");
  }
});

attKundDropDown.addEventListener("click", (e) => {
  console.log("Hell");
  e.stopPropagation();

  if (
    getElement("data-submenu-att-vara-kund").classList.contains("is-active")
  ) {
    getElement("data-submenu-att-vara-kund").style.display = "none";
    getElement("data-submenu-att-vara-kund").classList.remove("is-active");
  } else {
    getElement("data-submenu-att-vara-kund").style.display = "block";
    getElement("data-submenu-att-vara-kund").classList.add("is-active");
  }
});

const questions = document.querySelectorAll(".row");

questions.forEach((question) => {
  console.log(question.firstElementChild);
  question.addEventListener("click", () => {
    question.firstElementChild.classList.toggle("open");

    if (question.lastElementChild.style.display === "none") {
      console.log("BLOCK");
      question.lastElementChild.style.display = "block";
    } else {
      console.log("NONE");
      question.lastElementChild.style.display = "none";
    }
  });
});

const menu = document.querySelector(".menu-trigger");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  document.querySelector(".menu-wrapper").classList.toggle("is-active");
  document.querySelector(".top").classList.toggle("is-active");
  document.querySelector(".mobile-menu-btns").classList.toggle("is-active");
});

const trigger = document.querySelector(".trigger");
if (trigger) {
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("cypress-roll-up").classList.toggle("active");
  });
}

const switch1 = document.getElementById("switch-1");
const switch2 = document.getElementById("switch-2");

switch1?.addEventListener("click", () => {
  document.querySelector(".switch-bar").classList.remove("toright");
  document.querySelector(".switch-bar").classList.add("toleft");
  switch2.classList.remove("active");
  switch1.classList.add("active");

  document.getElementById("page-2").style.display = "none";
  document.getElementById("page-1").style.display = "grid";
});

switch2?.addEventListener("click", () => {
  document.querySelector(".switch-bar").classList.remove("toleft");
  document.querySelector(".switch-bar").classList.add("toright");
  switch1.classList.remove("active");
  switch2.classList.add("active");

  document.getElementById("page-2").style.display = "grid";
  document.getElementById("page-1").style.display = "none";
});

function getElement(data) {
  return document.querySelector(`[${data}]`);
}
