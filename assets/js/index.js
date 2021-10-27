import { projectsData, servicesData, teamData } from "./utils/data.js";
import {
	getProjectCardTemplate,
	getServiceTemplate,
	getWorkerTemplate,
} from "./utils/funtions.js";

const navbar = document.querySelector(".navbar");
const serviceList = document.querySelector(".services__list");
const projectList = document.querySelector(".project-list");
const workers = document.querySelector(".los-pibes");
const domain = `${location.protocol}//${location.hostname}`;

document.addEventListener("scroll", e => {
	if (window.scrollY >= 200 && !navbar.classList.contains("fixed")) {
		navbar.classList.add("fixed");
	}
	if (window.scrollY <= 200 && navbar.classList.contains("fixed")) {
		navbar.classList.remove("fixed");
	}
});

servicesData.forEach(e => {
	serviceList.innerHTML += getServiceTemplate(e);
});
projectsData.forEach(e => (projectList.innerHTML += getProjectCardTemplate(e)));
teamData.forEach(e=>{workers.innerHTML += getWorkerTemplate(e)})
const card = document.getElementsByClassName("card");
console.log(card.offsetWidth);
