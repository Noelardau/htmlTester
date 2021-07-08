document.querySelector('textarea').addEventListener('keyup',function() {
	var cont = document.querySelector('.cont')
	var rendu = document.querySelector('textarea').value

	cont.innerHTML  = `${rendu}`


})