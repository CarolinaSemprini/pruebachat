document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.getElementById('message-form');
    const senderInput = document.getElementById('sender-input');
    const contentInput = document.getElementById('content-input');

    messageForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const sender = senderInput.value;
        const content = contentInput.value;

        const response = await fetch('/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ sender, content })
        });

        if (response.ok) {
            senderInput.value = '';
            contentInput.value = '';
            // Actualizar la lista de mensajes con la respuesta del servidor si es necesario
        } else {
            console.log('Error al enviar el mensaje:', response.statusText);
        }
    });
});
