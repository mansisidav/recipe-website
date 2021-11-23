/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const links = getElement(".nav-links");
const navBtnDOM = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(
    "please double check your class name , there is no $(selector) class"
  );
};

const links = getElement9(".nav-links");
const links = getElement(".nav-btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-link");
});

const data = getElement("#data");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
