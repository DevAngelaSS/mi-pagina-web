//“Olvídate del usuario y regresa a la página principal”.

document.addEventListener("DOMContentLoaded", () => {

    // Capturamos el botón de cerrar sesión
    const logoutBtn = document.getElementById("logoutBtn");

    // Si el botón no existe, no hacemos nada
    if (!logoutBtn) return;

    // Cuando se hace clic en "Cerrar sesión"
    logoutBtn.addEventListener("click", () => {

        // Eliminamos el usuario de localStorage
        localStorage.removeItem("usuario");

        // Volvemos al Index principal
        window.location.href = "../paginas/Index.html";
    });

});