document.addEventListener("DOMContentLoaded", () => {

    // Seleccionamos el ícono del usuario (la silueta del usuario)
    const perfilIcon = document.querySelector(".fa-user-circle");

    // Detectamos si el archivo se encuentra dentro de una subcarpeta
    // Si está en subcarpeta => agregamos "../" para retroceder una carpeta
    // Si está en la raíz => no agregamos nada
    const rutaBase = window.esSubcarpeta ? "../" : ""; 

    if (perfilIcon) {

        perfilIcon.addEventListener("click", () => {

            // La ruta cambia dependiendo de dónde esté el archivo
            window.location.href = rutaBase + "IniciarSesion.html";

        });
    }

});