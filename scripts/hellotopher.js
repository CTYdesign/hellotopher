// if the localstorage hasn't be initialized, set the default value to false
if (localStorage.getItem("header-collapsed") == null) {
	localStorage.setItem("header-collapsed", JSON.stringify(false));
	document.getElementById("header-content").className = "col-xs-12 col-md-4";
}

// add event listener - click to the toggle button 
document.getElementById("headerToggle").addEventListener("click", setToggleState);


function setToggleState() {

	// runs a check to see what value localstorage has
	if(localStorage.getItem("header-collapsed") == JSON.stringify(true)) {

		// toggle the value in localstorage
		localStorage.setItem("header-collapsed", JSON.stringify(false));
		// adjust classes based on the toggle state
		document.getElementById("portfolio-container").className = "portfolio-container col-xs-12 col-md-8";
		document.getElementById("header-content").className = "col-xs-12 col-md-4";
		
	} else {

		// toggle the value in localstorage
		localStorage.setItem("header-collapsed", JSON.stringify(true));
		// adjust classes based on toggle state
		document.getElementById("portfolio-container").className = "portfolio-container col-xs-12 col-sm-11 expanded";
		document.getElementById("header-content").className = "col-xs-12 col-md-1 collapsed";
		
	}

};

if(localStorage.getItem("header-collapsed") == JSON.stringify(true)) {
	// adjust classes based on the toggle state
	document.getElementById("portfolio-container").className = "portfolio-container col-xs-12 col-md-11 expanded";
	document.getElementById("header-content").className = "col-xs-12 col-md-1 collapsed";
};

if(localStorage.getItem("header-collapsed") == JSON.stringify(false)) {
	// adjust classes based on the toggle state
	document.getElementById("portfolio-container").className = "portfolio-container col-xs-12 col-md-8";
	document.getElementById("header-content").className = "col-xs-12 col-md-4";
};
