import data from "./utils/data.js";
import templates from "./utils/templates.js";
import { renderDynamicContent, getElements } from "./utils/functions.js";
const navbar = document.querySelector('.navbar')
const selectors = [
	".services__list",
	".project-list",
	".clients",
	".los-pibes",
];

const elements = getElements(selectors)

data.forEach((e,i) => renderDynamicContent(e, elements[i], templates[i]))

document.addEventListener("scroll", e => {
	if (window.scrollY >= 200 && !navbar.classList.contains("fixed")) {
		navbar.classList.add("fixed");
	}
	if (window.scrollY <= 200 && navbar.classList.contains("fixed")) {
		navbar.classList.remove("fixed");
	}
});