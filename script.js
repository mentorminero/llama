document.addEventListener("DOMContentLoaded", function () {
    // Acceder a la variable de entorno API_KEY (en este caso, usando una variable global)
    const apiKey = window.API_KEY;

    // Mostrar la API_KEY en el párrafo con id "api-key"
    document.getElementById("api-key").textContent = apiKey;
});
