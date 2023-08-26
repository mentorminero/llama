// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Acceder a la variable de entorno API_KEY
    const apiKey = process.env.API_KEY;

    // Mostrar la API_KEY en el párrafo con id "api-key"
    document.getElementById("api-key").textContent = apiKey;
});
