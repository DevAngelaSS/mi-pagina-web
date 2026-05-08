// Mensaje flotante de confirmación

const toast = document.createElement("div");
toast.id = "toast-msg";

// Posicionamos el toast en la esquina inferior derecha y le damos apariencia.
toast.style.position = "fixed";        
toast.style.bottom = "30px";            
toast.style.right = "30px";             
toast.style.padding = "12px 18px";      
toast.style.background = "#4CAF50";     
toast.style.color = "white";            
toast.style.borderRadius = "5px";       
toast.style.fontSize = "15px";          
toast.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)"; 

toast.style.opacity = "0";

toast.style.transition = "opacity 0.4s ease";

toast.style.zIndex = "9999";

document.body.appendChild(toast);

// Función para mostrar mensaje en el toast
function mostrarMensaje(texto) {
    toast.textContent = texto;

    toast.style.opacity = "1";

    // Después de 2.5 segundos, hacemos fade out (opacidad a 0).
    setTimeout(() => {
        toast.style.opacity = "0";
    }, 2500);
}

// Detectar clic en "Añadir al carrito"

// Seleccionamos todos los botones que añaden al carrito.
document.querySelectorAll(".btn-add-cart").forEach(btn => {

    // Por cada botón, escuchamos el clic.
    btn.addEventListener("click", (e) => {

        const card = e.target.closest(".product-card");

        if (!card) return;

        // Buscamos el título del producto dentro de la tarjeta.
        const nombreProducto = card.querySelector("h3").textContent;

        // Mostramos el mensaje personalizado usando la función mostrarMensaje.
        mostrarMensaje(`"${nombreProducto}" fue añadido al carrito con éxito`);
    });
});