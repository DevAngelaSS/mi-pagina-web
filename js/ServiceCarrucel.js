// Esperamos a que todo el HTML esté cargado antes de manipular elementos.
document.addEventListener("DOMContentLoaded", () => {

    // Selección de elementos
    const wrapper = document.querySelector('.service-card-wrapper');

    const cards = document.querySelectorAll('.service-card');

    // Botones de navegación (flecha izquierda y derecha).
    const btnLeft = document.querySelector('.left-arrow');
    const btnRight = document.querySelector('.right-arrow');

    // Estado del carrusel
    let currentIndex = 0;

    // Cuántas tarjetas se muestran al mismo tiempo en la vista.
    const cardsPerView = 3;

    // Cantidad total de tarjetas disponibles en el carrusel.
    const totalCards = cards.length;

    // Utilidades
    // Calcula el ancho que ocupa cada card en el carrusel.
    function getCardWidth() {
        return cards[0].offsetWidth + 20;
    }

    // Actualiza la posición del wrapper aplicando una transform.
    function updateCarousel() {
        const offset = currentIndex * getCardWidth();
        wrapper.style.transform = `translateX(-${offset}px)`;
    }

    // Al hacer clic en la flecha derecha, avanzamos el índice.
    btnRight.addEventListener('click', () => {
        currentIndex++;

        // Si llegamos más allá del último conjunto visible, volvemos al inicio (bucle).
        if (currentIndex > totalCards - cardsPerView) {
            currentIndex = 0; // reiniciamos para crear efecto de bucle
        }

        updateCarousel();
    });

    // Al hacer clic en la flecha izquierda, retrocedemos el índice.
    btnLeft.addEventListener('click', () => {
        currentIndex--;

        // Si retrocedemos más allá del inicio, saltamos al último conjunto visible.
        if (currentIndex < 0) {
            currentIndex = totalCards - cardsPerView; // nos posicionamos al final
        }

        updateCarousel();
    });
});