// MAIN HEADER JAVASCRIPT
// Features menu
const featuresHeaderLink = document.querySelector(".js-header-features");
const featuresDropMenu = document.querySelector(".js-features-menu");
const featuresIconArrow = document.querySelector('.js-features-icon-arrow');

let featuresToggle = true;

featuresHeaderLink.addEventListener("click", function () {
	if (featuresToggle) {
		// FEATURES
		// drop menu on
		featuresDropMenu.setAttribute("style", "display: block");

		// icon arrow on
		featuresIconArrow.classList.toggle('icon-arrow-toggle-on');
		
		
		// COMPANY
		// drop menu off
		companyDropMenu.removeAttribute("style");

		// icon arrow off 
		companyIconArrow.classList.remove('icon-arrow-toggle-on');

	} else {
		// FEATURES
		// drop menu off
		featuresDropMenu.removeAttribute("style");

		// icon arrow off
		featuresIconArrow.classList.remove('icon-arrow-toggle-on');

		// COMPANY
		// drop menu off
		companyDropMenu.removeAttribute("style");

	}

	featuresToggle = !featuresToggle;

});

// Company menu
const companyHeaderLink = document.querySelector(".js-header-company");
const companyDropMenu = document.querySelector(".js-company-menu");
const companyIconArrow = document.querySelector('.js-company-icon-arrow');

let companyToggle = true;

companyHeaderLink.addEventListener("click", function () {

	if (companyToggle) {
		// COMPANY
		// icon arrow on
		companyIconArrow.classList.toggle('icon-arrow-toggle-on');

		// drop menu on
		companyDropMenu.setAttribute("style", "display: block");
		
		
		// FEATURES
		// drop menu off
		featuresDropMenu.removeAttribute("style");

		// icon arrow off 
		featuresIconArrow.classList.remove('icon-arrow-toggle-on');

	} else {
		// COMPANY
		// icon arrow off
		companyIconArrow.classList.remove('icon-arrow-toggle-on');

		// Drop menu off
		companyDropMenu.removeAttribute("style");

		// FEATURES
		// drop menu off
		featuresDropMenu.removeAttribute("style");
	}

	companyToggle = !companyToggle;

});

// SIDEBAR JAVASCRIPT

// sidebar button
const showSidebarButton = document.querySelector(".js-show-sidebar-button");

// sidebar
const sidebarMenu = document.querySelector(".js-sidebar-menu");
const sidebarIcon = document.querySelector(".js-sidebar-icon");

// Sidebar toggle
let sidebarToggle = true;

// Sidebar icon toggle
const sidebarToggleIcon = [
	"images/icon-menu.svg",
	"images/icon-close-menu.svg",
];

showSidebarButton.addEventListener("click", function () {
	// Animate hamburger button when clicked
	showSidebarButton.animate(
		[
			{
				// keyframes
				transform: "rotate(0)",
				transform: "rotate(720deg)",
			},
		],
		{
			// sync options
			duration: 200,
		}
	);

	if (sidebarToggle) {
		// show sidebar
		sidebarMenu.setAttribute("style", "display: block");
		// change button to X
		sidebarIcon.src = sidebarToggleIcon[1];
		

	} else {
		//change button back to hamburger 
		sidebarIcon.src = sidebarToggleIcon[0];
	
		// hide sidebar when clicked again
		sidebarMenu.removeAttribute("style");
		
	}
	
	sidebarToggle = !sidebarToggle;
});
