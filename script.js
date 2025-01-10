window.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const jokeContainer = document.getElementById('jokeContainer');

    generateBtn.addEventListener('click', () => {
        fetch('https://official-joke-api.appspot.com/jokes/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                jokeContainer.innerHTML = `<p><strong>Setup:</strong> ${data.setup}</p><p><strong>Punchline:</strong> ${data.punchline}</p>`;
            })
            .catch(error => {
                jokeContainer.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });
});
