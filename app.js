// Función para cargar una página con AJAX
function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('contentContainer').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}


document.getElementById('viceversa').addEventListener('click', function() {
    loadPage('viceversa.html');
});

document.getElementById('afrodisiaco').addEventListener('click', function() {
    loadPage('afrodisiaco.html');
});

document.getElementById('playasaturno').addEventListener('click', function() {
    loadPage('playasaturno.html');
});
