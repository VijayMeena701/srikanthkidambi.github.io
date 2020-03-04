function dropDownMenu() {
	var create = document.getElementById("mobileViewDiv"), check = document.getElementById("dropDownClass");
	if (check.className === "nav-items") {
		create.className += " mobileViewTab";
		check.className += " Mobile-View";
		$('body').css('overflow','hidden');
	} else {
		check.className = "nav-items";
		create.className = "header1";
		$('body').css('overflow-y','auto');
	}
}

function scrollFunction() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		document.getElementById("mobileViewDiv").className = "header1 scrolled";
	} else {
		document.getElementById("mobileViewDiv").className = "header1";
	}
}

const currentTab = location.href;
const menuItem = document.querySelectorAll('.nav-items a');

for(let i = 0; i<menuItem.length; i++) {
	if(menuItem[i].href === currentTab) {
		menuItem[i].className = "active";
	}
}

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}