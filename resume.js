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
		navs.forEach(reset);
		nav.classList.add('active')
		// reposition title to make room for additional content
		$('h1').style.fontSize = `2rem`;
		$('h1').style.transform = "translate(0, 90px)";

		document.querySelectorAll('.loadThis').forEach(hide);

		setTimeout(() => {
		 	$(".selection").innerHTML = `<br /> ${nav.innerHTML}`;
		 	$(".selection").style.opacity = 1;
		 	$(`.${e.target.id}`).style.display = "inline";
		}, 600);
		
		
	})
}

navs.forEach(navigate);