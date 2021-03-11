$("#btn_access").click(function(){
    var usuario = document.getElementById("boxUsuario").value;    
    var password = document.getElementById("boxPass").value;

    if ((usuario.toString()=="Wilfredo")&&(password.toString())=="123456") {
        $(document).ready(function(){
            $(".textNotification").slideToggle("slow").html("Has ingresado de forma exitosa!!").addClass("textNotificationCorrect");
        })
    } else {    
        $(document).ready(function(){
            $(".textNotification").slideToggle("fast").html("Error, verifique su usario o contraseña.").addClass("textNotificationError");
        })
    }
});