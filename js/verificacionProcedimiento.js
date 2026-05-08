document.addEventListener("DOMContentLoaded", () => {


    // Seleccionamos TODOS los elementos que tengan la clase "payment-method"
    const paymentMethods = document.querySelectorAll(".payment-method");

    paymentMethods.forEach(method => {

        // A cada método le agregamos un evento "click"
        method.addEventListener("click", () => {

            paymentMethods.forEach(m => m.classList.remove("active"));

            method.classList.add("active");

        });

    });

    //BOTÓN VOLVER

    const btnVolver = document.getElementById("btnVolver");
    btnVolver.addEventListener("click", () => {

        // Lo redirigimos automáticamente a la página carrito.html
        window.location.href = "carrito.html";

    });

    // BOTÓN FINALIZAR COMPRA

    const btnFinalizar = document.getElementById("btnFinalizar");
    btnFinalizar.addEventListener("click", (e) => {
        e.preventDefault();

        // Capturamos los valores de cada campo del formulario
        const distrito   = document.getElementById("distritoSelect").value.trim();
        const direccion  = document.getElementById("direccion").value.trim();
        const referencia = document.getElementById("referencia").value.trim();
        const tarjeta    = document.getElementById("tarjeta").value.trim();
        const fecha      = document.getElementById("fecha").value.trim();
        const cvv        = document.getElementById("cvv").value.trim();
        const terminos   = document.getElementById("terminos").checked;

        //VALIDACIONES

        // Verificamos que el usuario haya seleccionado un distrito
        if (distrito === "") {
            alert("Seleccione un distrito");
            return;
        }

        // Verificamos que la dirección tenga al menos 5 caracteres
        if (direccion.length < 5) {
            alert("Ingrese una dirección válida");
            return;
        }

        // Verificamos que la referencia tenga al menos 3 caracteres
        if (referencia.length < 3) {
            alert("Ingrese una referencia válida");
            return;
        }

        // VALIDACIÓN TARJETA
        const tarjetaRegex = /^\d{16}$/;

        if (!tarjetaRegex.test(tarjeta.replace(/\s/g, ""))) {
            alert("Ingrese un número de tarjeta válido de 16 dígitos");
            return;
        }

        // VALIDACIÓN FECHA
        const fechaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

        if (!fechaRegex.test(fecha)) {
            alert("Ingrese una fecha válida en formato MM/AA");
            return;
        }

        // VALIDACIÓN CVV
        const cvvRegex = /^\d{3}$/;

        if (!cvvRegex.test(cvv)) {
            alert("Ingrese un CVV válido de 3 dígitos");
            return;
        }

        // Verificamos que el usuario haya aceptado los términos
        if (!terminos) {
            alert("Debe aceptar los términos y condiciones");
            return;
        }

        // Si todo está correcto, mostramos un mensaje de éxito
        alert("Compra exitosa. Gracias por su compra.");

        // para luego redirigir al perfil del usuario
        setTimeout(() => {
            window.location.href = "usuario.html";
        }, 1000);

    });

});