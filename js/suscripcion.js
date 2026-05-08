document.addEventListener("DOMContentLoaded", () => {

    // Selecciona TODOS los inputs de tipo email que existen en la página
    const emailInputs = document.querySelectorAll('input[type="email"]');

    emailInputs.forEach(input => {

        const button = input.parentElement.querySelector('button[type="submit"], button');

        if (button) {

            // Al hacer clic en el botón, se ejecuta esta función
            button.addEventListener("click", (event) => {

                // Evita que la página se recargue automáticamente
                event.preventDefault(); 

                const email = input.value.trim();

                // Si el campo está vacío, mostramos un mensaje
                if (email === "") {
                    alert("Por favor ingresa un correo electrónico.");
                    return; // Se detiene la ejecución aquí
                }

                // si el correo tiene un formato válido 
                const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                // Si el correo NO cumple con el formato correcto
                if (!regexEmail.test(email)) {
                    alert("Por favor ingresa un correo electrónico válido.");
                    return; // Se detiene aquí también
                }

                // Si todo está correcto, se muestra este mensaje de agradecimiento
                alert("¡Gracias por suscribirte! Te enviaremos nuestras ofertas pronto.");

                // Luego vaciamos el campo para dejarlo limpio
                input.value = ""; 
            });
        }
    });
});