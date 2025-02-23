document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre && email && mensaje) {
        alert("¡Gracias, " + nombre + "! Hemos recibido tu mensaje.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
