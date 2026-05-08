// Selección de elementos

const productCards = document.querySelectorAll(".product-card"); 
const checkboxes = document.querySelectorAll(".checkbox-list input[type='checkbox']");
const priceSlider = document.querySelector(".price-slider"); 
const discountRadios = document.querySelectorAll("input[name='discount-range']"); 
const btnLimpiar = document.querySelector(".btn-link"); 


// Estado global
const CATEGORIAS_SLUG = {
    "Sofás y Sillones": "sofas-sillones",
    "Mesas de Comedor": "mesas-de-comedor",
    "Dormitorios": "dormitorios",
    "Sillas y Taburetes": "sillas-taburetes",
    "Almacenamiento": "almacenamiento",
    "Decoración": "decoracion"
};

// Estado centralizado de los filtros.
const filterState = {
    categories: new Set(Object.values(CATEGORIAS_SLUG)),
    maxPrice: parseInt(priceSlider.value),
    minDiscount: 0
};

// Función principal
// Esta función recorre todas las tarjetas y decide si mostrarlas u ocultarlas
// según el estado actual de los filtros (filterState).
function filtrarProductos() {
    productCards.forEach(card => {
        const categoria = card.dataset.category; 
        const precio = parseFloat(card.dataset.price); // precio numérico
        const descuento = parseFloat(card.dataset.discount); // porcentaje de descuento

        const coincideCategoria = filterState.categories.has(categoria);
        const coincidePrecio = precio <= filterState.maxPrice;
        const coincideDescuento = descuento >= filterState.minDiscount;

        // Si cumple todas => mostrar, si no  =>  ocultar.
        if (coincideCategoria && coincidePrecio && coincideDescuento) {
            mostrar(card);
        } else {
            ocultar(card);
        }
    });
}

// Mostrar / ocultar
function mostrar(card) {
    card.style.display = "block";
    setTimeout(() => card.style.opacity = "1", 10);
}

function ocultar(card) {
    card.style.opacity = "0";
    setTimeout(() => card.style.display = "none", 200);
}

// Eventos de filtros

// --- Categorías ---
// Para cada checkbox, al cambiar su estado actualizamos el Set de categorías.
checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {

        const nombre = checkbox.parentElement.textContent.trim();

        const slug = CATEGORIAS_SLUG[nombre];

        if (checkbox.checked) {
            // Si el checkbox quedó marcado, añadimos la categoría a la lista activa.
            filterState.categories.add(slug);
        } else {
            // Si se desmarca, la quitamos.
            filterState.categories.delete(slug);
        }

        // Volvemos a filtrar para reflejar los cambios inmediatamente.
        filtrarProductos();
    });
});

// --- Precio ---
// Cuando el usuario mueve el slider, actualizamos el estado y filtramos.
priceSlider.addEventListener("input", () => {
    filterState.maxPrice = parseInt(priceSlider.value);
    filtrarProductos();
});

// --- Descuento ---
// Los radios indican un umbral de descuento mínimo: 0, 10, 20, 30, etc.
discountRadios.forEach(radio => {
    radio.addEventListener("change", () => {
        const text = radio.parentElement.textContent.trim();

        // Detección por contenido de texto: funciona si el label contiene "10", "20", etc.
        if (text.includes("10")) filterState.minDiscount = 10;
        else if (text.includes("20")) filterState.minDiscount = 20;
        else if (text.includes("30")) filterState.minDiscount = 30;
        else filterState.minDiscount = 0;

        filtrarProductos();
    });
});

// --- Limpiar filtros ---
// Restaura todos los controles a su estado inicial y limpia los filtros.
btnLimpiar.addEventListener("click", () => {
    checkboxes.forEach(cb => cb.checked = true);
    filterState.categories = new Set(Object.values(CATEGORIAS_SLUG));

    // Reset precio: aquí asumimos que 2000 es el valor máximo por defecto.
    priceSlider.value = 2000;
    filterState.maxPrice = 2000;

    // Reset descuento: seleccionamos el primer radio 
    discountRadios[0].checked = true;
    filterState.minDiscount = 0;

    filtrarProductos();
});

// Inicialización
// Ejecutamos una primera vez para asegurarnos de que la vista coincide con el estado inicial.
filtrarProductos();
