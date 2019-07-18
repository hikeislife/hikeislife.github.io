$ = (item) => {
	return document.querySelector(item);
}
const navs = document.querySelectorAll(`.innerNav`);

reset = (nav) => {
	nav.classList.remove('active');
}

hide = (item) => {
	item.style.display = "none";
}

navigate = (nav) => {
	nav.addEventListener(`click`, (e) => {
		$(".selection").style.opacity = 0;
		$(`.${e.target.id}`).style.opacity = 0;
		$(`.loadThis`).style.transition = `opacity .9s ease-in-out .5s`;
		navs.forEach(reset);
		nav.classList.add('active')
		// reposition title to make room for additional content
		$('h1').style.fontSize = `2rem`;
		$('h1').style.transform = "translate(0, -20px)";

		document.querySelectorAll('.loadThis').forEach(hide);

		setTimeout(() => {
		 	$(".selection").innerHTML = `<br /> ${nav.innerHTML}`;
		 	$(".selection").style.opacity = 1;
		 	
		}, 600);
		setTimeout(() => {
			$(`.${e.target.id}`).style.display = "inline";
		 	$(`.${e.target.id}`).style.opacity = 1;
		}, 600);
	})
}

navs.forEach(navigate);