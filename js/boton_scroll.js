const d = document;
const w = window;

export default function	scrollTopButton(btn) {
	const $scrollBtn = d.querySelector(btn);

	w.addEventListener("scroll", e => {
		/*Si no funciona uno. escoge el otro*/
		let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
		/*Tanto una como la otra, nos dice la distancia
		que ha recorrido en px la barra de scroll, desde
		el top 0 hasta la nueva posición de la misma.*/
		if (scrollTop > 600) {
			$scrollBtn.classList.remove("hidden");
		} else {
			$scrollBtn.classList.add("hidden");
		}

		console.log(w.pageYOffset, d.documentElement.scrollTop);
	});
	
	d.addEventListener("click", e => {
		if (e.target.matches(btn) || e.target.matches(`${btn} *`)){
			w.scrollTo({
				behavior: "smooth",
				top: 0
			})
		}
	});
}
