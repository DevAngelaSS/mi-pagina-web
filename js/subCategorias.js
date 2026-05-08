// Espera a que todo el contenido HTML de la página se cargue completamente
document.addEventListener("DOMContentLoaded", () => {

    // Este será el control que el usuario moverá para elegir el precio máximo
    const slider = document.querySelector(".price-slider");

    const products = document.querySelectorAll(".product-card"); 

    const currentValueLabel = document.querySelector(".current-price"); 

    // Verificamos si el slider existe y si hay productos en la página
    if (!slider || products.length === 0) {
        console.warn("No se encontró slider o productos en esta página.");
        return;
    }

    // Esta función actualiza el texto que ve el usuario,
    const updateCurrentPriceLabel = () => {
        if (currentValueLabel) {
            // Cambia el texto, por ejemplo: "S/ 100"
            currentValueLabel.textContent = `S/ ${slider.value}`;
        }
    };

    // FUNCIÓN: Filtrar productos por precio
    const filterProducts = () => {

        // Este será el precio máximo permitido
        const maxPrice = parseFloat(slider.value);

        // Recorremos todos los productos uno por uno
        products.forEach(product => {

            // Obtiene el precio del producto desde el atributo data-price
            const priceText = product.dataset.price; 

            const productPrice = parseFloat(priceText);

            // Si el precio del producto es menor o igual al valor del slider
            if (productPrice <= maxPrice) {
                // Entonces el producto se muestra
                product.style.display = "block";
            } else {
                // Si es mayor, se esconde
                product.style.display = "none";
            }
        });

        updateCurrentPriceLabel();
    };

    // Ejecuta el filtro apenas se carga la página
    filterProducts();

    // se vuelve a ejecutar la función para filtrar de nuevo los productos
    slider.addEventListener("input", filterProducts);
});