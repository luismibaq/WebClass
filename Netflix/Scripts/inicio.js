function validar() {
  var email, contraseña;
  email = document.getElementById("email").value;
  contraseña = document.getElementById("contraseña").value;
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("contraseña", contraseña);
  if (email === "") {
    document.getElementById("email").style.background = "rgba(255,0,0,0.1)";
    alert("Email es requerido");
    return false;
  } else if (!email.includes("@")) {
    document.getElementById("email").style.background = "rgba(255,0,0,0.1)";
    alert("Inserte un email valido");
    return false;
  } else {
    document.getElementById("email").style.background = "#222";
    if (contraseña === "") {
      document.getElementById("contraseña").style.background = "rgba(255,0,0,0.1)";
      alert("Contraseña es requerido");
      return false;
    } else {
      window.location.href = "peliculas.html";
      return false;
    }
  }
}
