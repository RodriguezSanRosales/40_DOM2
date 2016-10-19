function validateForm(){
	/* Escribe tú código aquí */

	var spans = document.getElementsByTagName("span");
	while(spans.length>0){
		spans[0].parentElement.removeChild(spans[0]);
	}
	
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var mail = document.getElementById("input-email").value;
	var clave = document.getElementById("input-password").value;
	
	if(!(/^[A-Z][a-zA-Z ]*$/.test(nombre))){
		var validacion = document.createElement('span');
		validacion.setAttribute("class", "error");//crea una clase error a span
		validacion.appendChild(document.createTextNode("Debes agregar tu nombre iniciando con mayuscula")); 
		document.getElementById("name").parentElement.appendChild(validacion);

	}

	if(!(/^[A-Z][a-zA-Z ]*$/.test(apellido))){
		var validacion = document.createElement('span');
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debes agregar tu apellido iniciando con mayuscula")); 
		document.getElementById("lastname").parentElement.appendChild(validacion);;

	}
	if(mail == ""){
		var validacion = document.createElement('span');
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debes agregar tu email")); 
		document.getElementById("input-email").parentElement.appendChild(validacion);
	}

	campoPassword = document.getElementById("input-password").value;
	if (campoPassword <= 6){
		var validacion = document.createElement('span');
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debes agregar tu contraseña")); 
		document.getElementById("input-password").parentElement.appendChild(validacion);
	}else if (campoPassword == "password" || campoPassword == "123456" || campoPassword == "098765"){
		alert("La contraseña debe ser DIFERENTE")
	}
	camposSeleccion = document.getElementById("seleccion").selectedIndex;
	if (camposSeleccion == null || camposSeleccion == 0){
		var validacion = document.createElement('span');
		validacion.setAttribute("class", "error");
		validacion.appendChild(document.createTextNode("Debes seleccionar alguna opcion")); 
		document.getElementById("seleccion").parentElement.appendChild(validacion);
	}  

}

