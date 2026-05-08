//Si sí hay sesión => muestra su nombre
//Si no hay sesión => muestra “Iniciar Sesión”
//Y además cambia la página a la que va cuando hacen clic.


document.addEventListener("DOMContentLoaded", () => {

    // Capturamos el elemento donde se mostrará el nombre del usuario
    const nombreUsuarioSpan = document.getElementById("nombre-usuario");

    // Obtenemos de la memoria del navegador (localStorage) el usuario guardado
    const usuario = localStorage.getItem("usuario");

    if (!nombreUsuarioSpan) return;

    const rutaBase = window.esSubcarpeta ? "../" : "";

    // Si SÍ hay usuario guardado en localStorage…
    if (usuario) {

        nombreUsuarioSpan.textContent = usuario;

        nombreUsuarioSpan.addEventListener("click", () => {
            window.location.href = rutaBase + "usuario.html";
        });

    } else {

        nombreUsuarioSpan.textContent = "Iniciar Sesión";

        nombreUsuarioSpan.addEventListener("click", () => {
            window.location.href = rutaBase + "IniciarSesion.html";
        });
    }

});