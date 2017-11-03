function add(){
	//tomando valor
	var comments = document.getElementById("comment").value;
	if (comments.length < 1) {
		alert("escribe algún comentario")
	} else {
		//limpia mi textarea luego de rescatar el value
		document.getElementById("comment").value = "";
		//creando nuevo elemento
		var newComment = document.createElement('div');
		var cont = document.getElementById('cont');

		//creando checkbox
		//creando input
		var check = document.createElement('input');
		//agregandole el tipo checkbox
		check.type = 'checkbox';

		//creando Texto
		var paragraph = document.createElement('p');
		//agregando clase al elemento
		paragraph.classList.add('color')
		//creando nodo de texto
		var nodoText = document.createTextNode(comments);
		//añadir nodo de texto al elemento
		paragraph.appendChild(nodoText);

		//creando elemento tipo i (para el icono)
		var heart = document.createElement('i');
		//agregando corazon
		heart.classList.add('fa', 'fa-heart', 'heart');
		//creando elemento tipo i (para el icono)
		var trash = document.createElement('i');
		//agregando basurero
		trash.classList.add('fa', 'fa-trash', 'trash');

		//newComment adopta todos los elementos que le pertenecen
		newComment.appendChild(check);
		newComment.appendChild(trash);
		newComment.appendChild(heart);
		newComment.appendChild(paragraph);

		//agregando comentarios al contenedor "cont"
		cont.appendChild(newComment);
		//al hacer click en el c
		check.addEventListener('click', function(){
			paragraph.classList.toggle('strike-out');
		})
		//remueve newComent en cont, al darle click en trash
		trash.addEventListener('click', function(){
			if (check.checked) {
				cont.removeChild(newComment)
			} else{
				alert("usa el check")
			}
		})

		heart.addEventListener('click', function(){
			heart.classList.toggle('red')
		})
	}

}

