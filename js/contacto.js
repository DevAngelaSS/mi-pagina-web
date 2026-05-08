// Seleccionamos el formulario usando su clase.
const form = document.querySelector(".contact-form");

// Le agregamos un evento que se activará cuando la persona presione el botón "Enviar"
form.addEventListener("submit", function(e) {

    // Evitamos que el formulario se envíe automáticamente
    // (es decir, que no se recargue la página sin que validemos los datos primero)
    e.preventDefault(); 

    // Guardamos en variables los valores que el usuario escribió en el formulario
    const nombre = document.getElementById("full-name").value.trim();
    const correo = document.getElementById("email").value.trim();
    const telefono = document.getElementById("phone").value.trim();
    const interest = document.getElementById("interest").value;
    const message = document.getElementById("message").value.trim();

    // Aquí seleccionamos el radio button que esté marcado (forma de contacto preferida)
    const metodo = document.querySelector('input[name="contact-pref"]:checked');


    // VALIDACIÓN DE CAMPOS VACÍOS
    // Si el nombre o el correo están vacíos, mostramos un mensaje y detenemos el proceso
    if (!nombre || !correo) {
        alert("Por favor, completa los campos obligatorios: Nombre y Correo.");
        return; // El return detiene el envío
    }


    // VALIDACIÓN DEL CORREO
    // Usamos una expresión regular para verificar que el correo tenga un formato válido
    const emailRegex = /\S+@\S+\.\S+/;

    // Si el correo NO cumple con el formato correcto, avisamos al usuario
    if (!emailRegex.test(correo)) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }


    // VALIDACIÓN DEL SELECT (INTERÉS)
    // Si el usuario no ha cambiado la opción por defecto, se le pide que elija una
    if (interest === "Selecciona una opción") {
        alert("Por favor, selecciona el tipo de mueble que te interesa.");
        return;
    }


    // VALIDACIÓN DEL MÉTODO DE CONTACTO (RADIO)
    // Si por alguna razón ningún radio está seleccionado, se muestra advertencia
    if (!metodo) {
        alert("Por favor, selecciona un método de contacto preferido.");
        return;
    }


    // ENVÍO EXITOSO

    // Se muestra un mensaje de confirmación al usuario
    alert("¡Solicitud enviada correctamente! Nos pondremos en contacto contigo.");

    // Se limpian todos los campos del formulario
    form.reset();
});