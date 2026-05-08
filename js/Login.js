
//Este archivo hace 3 cosas clave:
//Verifica si los datos son correctos
//Guarda al usuario cuando inicia sesión
//Permite ver u ocultar la contraseña con el “ojito”

document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('form'); 

    const passwordInput = document.getElementById("password");

    const passwordToggle = document.querySelector(".password-toggle");
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue

        // Obtenemos los valores escritos por el usuario
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        // Verificamos si los datos coinciden con los correctos
        if(email === "MariaGonzales@hotmail.com" && password === "maria123") {

            alert("Login exitoso");

            // Guardamos el nombre del usuario en localStorage
            // Esto permite recordar que ya inició sesión
            localStorage.setItem("usuario", "María Gonzales");
            window.location = "../paginas/Index.html"; 

        } else {

            alert("Email o contraseña incorrectos");
        }
    });
    
    // Si existe el ícono del ojito
    if(passwordToggle) {

        // Al hacer clic, se muestra o se oculta la contraseña
        passwordToggle.addEventListener('click', function() {

            // Alterna entre tipo password y text
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);

            // Cambia el ícono de ojo abierto/cerrado
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});