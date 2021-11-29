function validar() {
  var email;
  var email, nombre, edad, matricula, residencia;
  email = document.getElementById("email").value;
  nombre = document.getElementById("nombre").value;
  edad = document.getElementById("edad").value;
  matricula = document.getElementById("matricula").value;
  residencia = document.getElementById("residencia").value;

  window.localStorage.setItem("email", email);
  window.localStorage.setItem("nombre", nombre);
  window.localStorage.setItem("edad", edad);
  window.localStorage.setItem("matricula", matricula);
  window.localStorage.setItem("residencia", residencia);

  if (window.localStorage.getItem("email") !== "") {
    alert(window.localStorage.getItem("email"));
    return true;
  }
}

function validateEmail() {
  var email;
  email = document.getElementById("email").value;
  if (email === "") {
    alert("Email es requerido");
  } else if (!email.includes("@")) {
    alert("Inserte un email valido");
  } else {
    window.location.href = "pag2.html";
    window.localStorage.setItem("email", email);
  }
}

function validateP2() {
  var nombre, edad, matricula, residencia;
  nombre = document.getElementById("nombre").value;
  edad = document.getElementById("edad").value;
  matricula = document.getElementById("matr").value;
  residencia = document.getElementById("ciudad").value;
  universitario = document.getElementById("universitario");
  lider = document.getElementById("lider");
  emp = document.getElementById("emp");
  otro = document.getElementById("otro");

  if (nombre === "") alert("El nombre es requerido");
  else if (edad === "") alert("La edad es requerida");
  else if (isNaN(edad)) alert("La edad tiene que ser un numero");
  else if (matricula === "") alert("La matricula es requerida");
  else if (residencia === "") alert("La residencia es requerida");
  else {
    window.location.href = "pag3.html";
    window.localStorage.setItem("nombre", nombre);
    window.localStorage.setItem("edad", edad);
    window.localStorage.setItem("matricula", matricula);
    window.localStorage.setItem("residencia", residencia);
    if (universitario.checked === true)
      window.localStorage.setItem("eres", universitario.value);
    else if (lider.checked === true)
      window.localStorage.setItem("eres", lider.value);
    else if (emp.checked === true)
      window.localStorage.setItem("eres", emp.value);
    else {
      window.localStorage.setItem(
        "eres",
        document.getElementById("Otro").value
      );
    }
  }
}

function validateP3() {
  var uni, carrera, anio, numero, op;
  uni = document.getElementById("uni").value;
  carrera = document.getElementById("carrera").value;
  anio = document.getElementById("anio").value;
  numero = document.getElementById("numero").value;
  op = document.getElementById("op").value;

  if (uni === "") alert("La universidad es requerida");
  else if (numero === "") alert("El numero es requerido");
  else {
    window.localStorage.setItem("uni", uni);
    window.localStorage.setItem("carrera", carrera);
    window.localStorage.setItem("anio", anio);
    window.localStorage.setItem("numero", numero);
    window.localStorage.setItem("op", op);
    window.location.href = "pag4.html";
  }
}

function back2() {
  window.location.href = "pag1.html";
}

function back3() {
  window.location.href = "pag2.html";
}

function getInfo() {
  document.getElementById("table").hidden = false;
  document.getElementById("emailRes").innerText = window.localStorage.getItem(
    "email"
  );
  document.getElementById("nombreRes").innerText = window.localStorage.getItem(
    "nombre"
  );
  document.getElementById("edadRes").innerText = window.localStorage.getItem(
    "edad"
  );
  document.getElementById(
    "matriculaRes"
  ).innerText = window.localStorage.getItem("matricula");
  document.getElementById("resRes").innerText = window.localStorage.getItem(
    "residencia"
  );
  document.getElementById("eresRes").innerText = window.localStorage.getItem(
    "eres"
  );
  document.getElementById("uniRes").innerText = window.localStorage.getItem(
    "uni"
  );
  document.getElementById("carreraRes").innerText = window.localStorage.getItem(
    "carrera"
  );
  document.getElementById("anioRes").innerText = window.localStorage.getItem(
    "anio"
  );
  document.getElementById("telRes").innerText = window.localStorage.getItem(
    "numero"
  );
  if (window.localStorage.getItem("op") !== "")
    document.getElementById("opRes").innerText = window.localStorage.getItem(
      "op"
    );
  return true;
}
