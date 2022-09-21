export default function	burgerMenu(panelBtn, panel, menuLink) {
	const d = document;

	d.addEventListener("click", e => {
		if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
			/*Si la clase existe, la elimina y devuelve false*/
			/*Si la clase no existe, la añade y devuelve true*/
			d.querySelector(panelBtn).firstElementChild.classList.toggle("none");
			d.querySelector(panelBtn).lastElementChild.classList.toggle("none");
			
			d.querySelector(panel).classList.toggle("is-active");
		}

		if(e.target.matches(menuLink)) {
			d.querySelector(panelBtn).firstElementChild.classList.remove("none");
			d.querySelector(panelBtn).lastElementChild.classList.add("none");
			
			d.querySelector(panel).classList.remove("is-active");
		}
	})
}