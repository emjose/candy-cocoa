"use strict";

const storedTheme =
	localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);

function switchMode() {
	const currentTheme = document.documentElement.getAttribute("data-theme");
	const targetTheme = currentTheme === "light" ? "dark" : "light";
	document.documentElement.setAttribute("data-theme", targetTheme);
	localStorage.setItem("theme", targetTheme);
}

document.addEventListener("DOMContentLoaded", () => {
	const scrollPosition = sessionStorage.getItem("scrollPosition");
	if (scrollPosition) {
		window.scrollTo(0, scrollPosition);
		sessionStorage.removeItem("scrollPosition");
	}
});

window.addEventListener("beforeunload", () => {
	sessionStorage.setItem("scrollPosition", window.scrollY);
});

$(function () {
	var $nav = $("#mainNavbar");
	var $corner = $(".github-corner");
	var $whiteNav = $(".white-nav");
	var $firstButton = $(".first-button");
	var currentMode = document.documentElement.getAttribute("data-theme");

	$(document).scroll(function () {
		var scrolled = $(this).scrollTop() !== 0;
		$nav.toggleClass("scrolled", scrolled);
		$corner.toggleClass("corner-scrolled", scrolled);

		if (scrolled && currentMode === "light") {
			$whiteNav.css("color", "white");
			$firstButton.removeClass("navbar-light").addClass("navbar-dark");
		} else if (currentMode === "light") {
			$whiteNav.css("color", "var(--crimson)");
			$firstButton.removeClass("navbar-dark").addClass("navbar-light");
		}
	});

	$firstButton
		.removeClass(currentMode === "dark" ? "navbar-light" : "navbar-dark")
		.addClass(currentMode === "dark" ? "navbar-dark" : "navbar-light");
});

const swRegistration = () => {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/sw.js")
			.then((registration) => console.log("%c❤️", heart))
			.catch((err) => console.log(err));
	}
};

function consoleText() {
	console.clear();
	const styles = {
		main: "color: white; background: rgba(238,58,136,1); font-size: 18px; padding: 12px; margin: 6px 0 6px 14px",
		secondary: "font-size: 14px; padding: 16px; margin: 6px 0 6px 0; color: rgba(238,58,136,1)",
		gradient:
			"font-size: 14px; color: #fff; width: 200px; padding: 8px; margin: 6px 0 6px 14px; border-radius: 4px; background: rgba(238,58,136,1); background: linear-gradient(109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1%)",
	};
	console.log("%cHello World! I'm Emmanuel.", styles.main);
	console.log("%cThank you for checking out my work!", styles.secondary);
	console.log("%cPortfolio %chttps://bit.ly/3QQr1Ux", styles.gradient, styles.secondary);
	console.log("%cLinkedin  %chttps://bit.ly/3cygAD4", styles.gradient, styles.secondary);
	console.log("%cGithub    %chttps://bit.ly/3iwQC6U", styles.gradient, styles.secondary);
	console.log("%cThe README   %chttps://bit.ly/3Wy2Ugv", styles.gradient, styles.secondary);
	console.log("%cHave a wonderful day!", styles.secondary);
}

swRegistration();
consoleText();
