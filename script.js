let menubar = document.querySelector('#menu-bar');
let mynav = document.querySelector('.nav');
let searchbar = document.querySelector('#search-bar');
let search = document.querySelector('.search-form');



menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    mynav.classList.toggle('active')
}
searchbar.onclick = () =>{
    search.classList.toggle('active');
}

// footer

$("#wave").wavify({
	height: 150,
	bones: 4,
	amplitude: 80,
	color: "#23272A",
	speed: 0.05
});

// End footer js section