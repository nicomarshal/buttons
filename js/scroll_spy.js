const d = document;

export default function scrollSpy() {
	const $sections = d.querySelectorAll("section[data-scroll-spy]");

	const cb = (entries) => {
		console.log(entries);

		entries.forEach(entry => {
			const id = entry.target.getAttribute("id");
			if (entry.isIntersecting) {
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
			} else {
				d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");				
			}
		})
	}

	const observer = new IntersectionObserver(cb,{
		//root

		/*Hasta que de la siguiente seccion no pase
		250 px, entonces no se va a "iluminar" la sección 
		en el menu aside*/
		//rootMargin: "-300px"

		/*Se iluminara el menu aside solo cuando la
		seccion tenga visible el 50% de su viewport*/
		threshold: 0.5,

	});

	$sections.forEach(el => observer.observe(el));
}