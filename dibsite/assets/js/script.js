// toggle menu di layar kecil
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function () {
	navbar.classList.toggle("active");
});

window.onscroll = () => {
	navbar.classList.remove("active");
};

// muncul setelah di scroll
let about = document.querySelector("#about");
let benefit = document.querySelector("#benefit");
let facility = document.querySelector("#facility");
let services = document.querySelector("#services");
let cta = document.querySelector("#cta");
let footer = document.querySelector("#footer");
/*
window.onload = function() {
	about.classList.add("hide");
	benefit.classList.add("hide");
	facility.classList.add("hide");
	services.classList.add("hide");
	cta.classList.add("hide");
	footer.classList.add("hide");
}

let scrollFunc = function () {
	let y = window.scrollY;
	if (y >= 300) {
		about.classList.add("show");
		about.classList.remove("hide");
	}
	if (y >= 900) {
		benefit.classList.add("show");
		benefit.classList.remove("hide");
	}
	if (y >= 1500) {
		facility.classList.add("show");
		facility.classList.remove("hide");
	}
	if (y >= 2500) {
		services.classList.add("show");
		services.classList.remove("hide");
	}
	if (y >= 3000) {
		cta.classList.add("show");
		cta.classList.remove("hide");
	}
	if (y >= 3500) {
		footer.classList.add("show");
		footer.classList.remove("hide");
	}
};
window.addEventListener("scroll", scrollFunc);
*/