function validar(){
    var nombre, apellidos, email, usuario, contraseña, telefono;
    nombre = document.getElementById("nombre").value;
    apellidos = document.getElementById("apellidos").value;
    email = document.getElementById("email").value;
    usuario = document.getElementById("usuario").value;
    contraseña = document.getElementById("contraseña").value;
    telefono = document.getElementById("telefono").value;
    if(nombre==="" || apellidos==="" || email==="" || usuario==="" || contraseña==="" || telefono===""){
        alert("Campos Obligatorio");
        return false;
    }
    if(nombre.length>15){
        alert("Nombre Largo");
        return false;
    }
    if(apellidos.length>20){
        alert("Apellido Largo");
        return false;
    }
    if(email.length>20){
        alert("Email Largo");
        return false;
    }
    if(usuario.length>20){
        alert("Usuario Largo");
        return false;
    }
    if(contraseña.length>10){
        alert("Contraseña Largo");
        return false;
    }
    if(telefono.length>9){
        alert("Teléfono Largo");
        return false;
    }
    if(isNaN(telefono)){
        alert("Ingrese Teléfono correctamente");
        return false;
    }
    
}