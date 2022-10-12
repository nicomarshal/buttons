const d = document;
const ls = localStorage;

export default function darkTheme(btn, classDark) {
	const $themeBtn = d.querySelector(btn);
	/*data-dark es un data atributteque acbaamos
	de inventar*/
	const $selectors = d.querySelectorAll("[data-dark]");
	
	console.log($selectors);

	let moon = $themeBtn.innerHTML;
	let sun = `<img src="./assets/sun.png" alt="sun">`;

	const lightMode = () => {
		$selectors.forEach(el => el.classList.remove(classDark));
		$selectors[2].style.backgroundColor = "var(--second-color)";
		$themeBtn.innerHTML = moon;
		ls.setItem("theme", "light");
	};
	const darkMode = () => {
		$selectors.forEach(el => el.classList.add(classDark));
		$selectors[2].style.backgroundColor = "#303030";
		$themeBtn.innerHTML = sun;
		ls.setItem("theme", "dark");
	};

	d.addEventListener("click", e => {
		if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
			if ($themeBtn.innerHTML === moon) {
				darkMode();
			} else {
				lightMode();
			}
		}
	})

	d.addEventListener("DOMContentLoaded", e => {
		if (ls.getItem("theme") === null) ls.setItem("theme", "light");
		if (ls.getItem("thene") === "light") lightMode();
		if (ls.getItem("theme") === "dark") darkMode(); 
	})
}
