   ///Validación de formulario de solicitud

const formSolicitud = document.querySelector(".solicitud-form");

formSolicitud.addEventListener("submit", function(e) {

    e.preventDefault();

    // Lectura de los valores
    // Aquí vamos recuperando los valores que el usuario escribió.
    const nombre = formSolicitud.querySelector('input[type="text"]').value.trim();
    const telefono = formSolicitud.querySelector('input[type="tel"]').value.trim();
    const correo = formSolicitud.querySelector('input[type="email"]').value.trim();


    const distrito = formSolicitud.querySelectorAll('input[type="text"]')[1].value.trim();

    // Recuperamos el contenido de la caja de texto (textarea) con los detalles de la solicitud.
    const detalles = formSolicitud.querySelector('textarea').value.trim();

    // Validación de campos vacíos

    // Verificamos que todos los campos requeridos contengan algo.
    if (!nombre || !telefono || !correo || !distrito || !detalles) {
        alert("Por favor, completa todos los campos antes de enviar.");
        return;
    }


    // Validación básica del correo
    const emailRegex = /\S+@\S+\.\S+/;

    // Si el correo no cumple el patrón, avisamos y detenemos el proceso.
    if (!emailRegex.test(correo)) {
        alert("Ingresa un correo electrónico válido.");
        return;
    }


    //todo pasó las validaciones
    alert("Solicitud enviada correctamente. Nos pondremos en contacto contigo.");

    // Limpiamos el formulario para dejarlo como nuevo.
    formSolicitud.reset();


});