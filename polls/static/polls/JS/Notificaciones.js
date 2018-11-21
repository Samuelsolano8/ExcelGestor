var btnPermiso = document.getElementById("buttonP"),
    titulo = "Fili Santillán",
    opciones = {
        icon: "logo.png",
        body: "Notificación de prueba"
    };

function permiso() {
        Notification.requestPermission();
}

function mostrarNotificacion() {
    if(Notification) {
        if (Notification.permission == "granted") {
            var n = new Notification(titulo, opciones);
        }

        else if(Notification.permission == "default") {
        }

        else {
        }
    }
}

btnPermiso.addEventListener("click", permiso);
$(document).ready(function() {
mostrarNotificacion();
});
