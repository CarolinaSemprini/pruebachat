// messages.js

// Función para cargar los mensajes del chat desde el servidor
function loadMessages() {
    fetch("/api/messages")
        .then((response) => response.json())
        .then((data) => {
            const messages = data.messages;

            const messagesContainer = document.querySelector("#messages-container");
            messagesContainer.innerHTML = ""; // Vaciar el contenedor de mensajes

            messages.forEach((message) => {
                const messageElement = document.createElement("div");
                messageElement.classList.add("message");
                messageElement.innerHTML = `
            <span class="sender">${message.sender}: </span>
            <span class="text">${message.text}</span>
          `;
                messagesContainer.appendChild(messageElement);
            });
        })
        .catch((error) => {
            console.log("Error al cargar los mensajes:", error);
        });
}

// Evento cuando se envía el formulario de mensajes
const form = document.querySelector("#message-form");
const input = document.querySelector("#message-input");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = input.value;

    fetch("/api/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Mensaje enviado:", data);

            // Si el mensaje se envió correctamente, cargar los mensajes actualizados
            loadMessages();
        })
        .catch((error) => {
            console.log("Error al enviar el mensaje:", error);
        });

    input.value = ""; // Vaciar el campo de entrada de mensajes
});

// Carga los mensajes cuando se carga la página
window.addEventListener("DOMContentLoaded", loadMessages);
