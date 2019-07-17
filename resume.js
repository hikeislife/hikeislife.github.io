$ = (item) => {
	return document.querySelector(item);
}
const navs = document.querySelectorAll(`.innerNav`);

reset = (nav) => {
	nav.classList.remove('active');
}

navigate = (nav) => {
	nav.addEventListener(`click`, () => {
		navs.forEach(reset);
		nav.classList.add('active')
		// reposition title to make room for additional content
		$('h1').style.fontSize = `2rem`;
		$('h1').style.transform = "translate(0, 90px)";
		
		$(".selection").innerHTML = ` - ${nav.innerHTML}`;
	})
}

navs.forEach(navigate);