function vali() {
    var nombre,Asunto,Correo,mensaje,Exprecion;
    var nombre = document.getElementById("Nombre").value;
    var Asunto = document.getElementById("Asunto").value;
    var Correo = document.getElementById("Correo").value;
    var mensaje = document.getElementById("mensaje").value;

    Exprecion = /\w+@\w+\.+[a-z]/;

    if (nombre ===""|| Asunto===""|| Correo===""|| mensaje==="") {
        alert("Todos los campos son obligatorios favor de llenarlos")
        return false;
    }
    else if(nombre.length>30){
        alert("El nombre es demaciado largo");
    }
    else if(Asunto.length>30){
        alert("El asunto es demaciado largo");
    }
    else if(Correo.length>80){
        alert("El correo es demaciado largo")
    }
    else if(!Exprecion.test(Correo)){
        alert("El correo no es valido")
        return false;
    }

}
//abre el menu//
$('.menu-lateral').on('click',function(){
    $('.Contenido').toggleClass('abrir');
});

