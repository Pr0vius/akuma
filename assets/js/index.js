`use strict`;
import data from "./utils/data.js";
import templates from "./utils/templates.js";
import {
  renderDynamicContent,
  getElements,
  sendMail,
  renderSuccessMessage,
  renderFailedMessage,
  disableFormSuccess,
} from "./utils/functions.js";
const navbar = document.querySelector(".navbar");
const nav = document.querySelector(".nav-ctn");
const menuBtn = document.querySelector("#nav-btn");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelectorAll(".nav-item");
const contactForm = document.querySelector("#contact-form");
const loadPage = document.querySelector(".loadPage");
const selectors = [
  ".services__list",
  ".project-list",
  ".clients",
  ".los-pibes",
  ".contact-info",
];

const elements = getElements(selectors);

data.forEach((e, i) => renderDynamicContent(e, elements[i], templates[i]));

menuBtn.addEventListener("click", e => {
  menuBtn.classList.toggle("open");
  nav.classList.toggle("open");
  overlay.classList.toggle("active");
});

navLinks.forEach(e =>
  e.addEventListener("click", evt => {
    menuBtn.classList.remove("open");
    nav.classList.remove("open");
    overlay.classList.remove("active");
  })
);

document.addEventListener("scroll", e => {
  if (window.scrollY >= 200 && !navbar.classList.contains("fixed")) {
    navbar.classList.add("fixed");
  }
  if (window.scrollY <= 200 && navbar.classList.contains("fixed")) {
    navbar.classList.remove("fixed");
  }
});

contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  const res = await sendMail(contactForm);
  res.text().then(e => {
    if (e == "mail sended") {
      renderSuccessMessage();
      disableFormSuccess();
    } else {
      renderFailedMessage();
    }
  });
});

window.addEventListener("load", e => {
  loadPage.classList.remove("active");
});
