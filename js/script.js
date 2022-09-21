import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./boton_dark_theme.js";
import burgerMenu from "./boton_burger.js";
import scrollSpy from "./scroll_spy.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
	scrollTopButton(".scroll-top-btn");
	burgerMenu(".panel-btn", ".panel", ".menu a");	
	scrollSpy();
})

/*Se ejecuta fuera del DOMContentLoaded para que
puede ejecutarse el evento de mismo nombre que se 
encuentra dentro de la función darkTheme*/
/*No puede ejecutarse dos veces*/
darkTheme(".dark-theme-btn", "dark-mode");




