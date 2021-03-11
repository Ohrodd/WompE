'use strict';
function conexion() {
    var usuario = document.getElementById("user").value,
    usuarioF = usuario.toString();
    var contra = document.getElementById("pass").value,
    contraF = contra.toString();
    var nombre = "Wilfredo", ff="123456";

    if(usuarioF ==nombre && contraF ==ff){
        window.location="https://www.google.com.gt"
        /*
        var estadoF = document.getElementById("estado");
        estadoF.innerHTML = "Has iniciado sesión!!!";
        */
    }else{
        var estadoF = document.getElementById("estado");
        estadoF.innerHTML = "Error, su usario o contaseña son erroneas."
    }
    /*

    var dato = document.getElementById("estado");
    dato.innerHTML = "Cambio de texto";
*/
}