function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById("name").value;
	var apellido = document.getElementById("lastname").value;
	var mail = document.getElementById("input-email").value;
	var clave = document.getElementById("input-password").value;
	if(nombre == "" || apellido == "" || mail == "" || clave == ""){
		alert("Estos campos son OBLIGATORIOS");
	}
	camposSeleccion = document.getElementById("seleccion").selectedIndex;
	if (camposSeleccion == null || camposSeleccion == 0){
		return document.getElementById('seleBi').style.display = 'inline';
	}

	if(/^[a-zA-Z ]+$/.test( 'nombre')){
		return document.getElementById('nom').style.display = 'inline';

	}

	if(/^[a-zA-Z ]+$/.test( 'apellido')){

	}

	campoPassword = document.getElementById("input-password").value;
	if (campoPassword < 6){
		return document.getElementById('passw').style.display = 'inline';
	}else if (campoPassword == "password" || campoPassword == "123456" || campoPassword == "098765"){
		alert("La contraseña debe ser DIFERENTE")
	}
}