const navs = document.querySelectorAll(`.innerNav`);

reset = (nav) => {
	nav.classList.remove('active');
}

navigate = (nav) => {
	nav.addEventListener(`click`, () => {
		navs.forEach(reset);
		nav.classList.add('active')
	})
}

navs.forEach(navigate);