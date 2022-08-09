let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle("fa-times");
	navbar.classList.toggle("active");
	searchIcon.classList.remove("fa-times");
	searchFrom.classList.remove("active");
};

let searchIcon = document.querySelector("#search-icon");
let searchFrom = document.querySelector(".search-form");

searchIcon.onclick = () => {
	searchIcon.classList.toggle("fa-times");
	searchFrom.classList.toggle("active");
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
};

window.onscroll = () => {
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
	searchIcon.classList.remove("fa-times");
	searchFrom.classList.remove("active");
};
