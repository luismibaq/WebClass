function validar() {
  var nombre, apellidos, email, usuario, contraseña, telefono;
  nombre = document.getElementById("nombre").value;
  email = document.getElementById("email").value;
  contraseña = document.getElementById("contraseña").value;
  contraseñaR = document.getElementById("contraseñaR").value;
  if (nombre === "" || email === "" || contraseña === "" || contraseñaR === "") {
    alert("Campos Obligatorio");
    if (nombre === "") {
      document.getElementById("nombre").style.background = "rgba(255,0,0,0.1)";
    }
    if (email === "") {
      document.getElementById("email").style.background = "rgba(255,0,0,0.1)";
    }
    if (contraseña === "") {
      document.getElementById("contraseña").style.background = "rgba(255,0,0,0.1)";
    }
    if (contraseñaR === "") {
      document.getElementById("contraseñaR").style.background = "rgba(255,0,0,0.1)";
    }
    return false;
  } else if (nombre.length < 6) {
    ;
    alert("Nombre demasiado corta")
    return false;
  } else if (contraseña.length < 6) {
    alert("Contraseñas demasiado corta");
    return false;
  } else if (contraseña != contraseñaR) {
    alert("Las contraseñas deben ser iguales");
    return false;
  } else {
    alert("Registrado con éxito");
    return true;
  }

}
