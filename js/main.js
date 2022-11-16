// Modal window
const appointment = document.getElementById('appointment'),
	  closeBtn = document.getElementById('modal-window__close'),
	  modalWindow = document.getElementById('modal-window'),
	  docBody = document.querySelector('body');
appointment.addEventListener('click', () => {
	modalWindow.classList.add('active');
	docBody.classList.add('overhid');
})
closeBtn.addEventListener('click', () => {
	modalWindow.classList.remove('active');
	docBody.classList.remove('overhid');
})
// Scroll to section and up
const scrTo = name => {
	document.querySelector('#' + name).scrollIntoView({
		behavior: "smooth",
		block: "start"
	})
}
const goUpBtn = document.getElementById('go-up');
const goUpBtnVisability = () => {
	if(window.scrollY > window.innerHeight / 2) {
		goUpBtn.classList.add('active')
	}else {
		goUpBtn.classList.remove('active')
	}
}
window.addEventListener('scroll', () => goUpBtnVisability())
