// Fonction pour ouvrir l'image en plein écran
function openFullscreen(src) {
    document.getElementById('fullscreenModal').style.display = 'block';
    document.querySelector('.fullscreen-image').src = src;
}

// Fonction pour fermer l'image en plein écran
function closeFullscreen() {
    document.getElementById('fullscreenModal').style.display = 'none';
}

// Ajoutez un écouteur d'événements à vos images
document.querySelectorAll('.imagePrestation img').forEach(image => {
    image.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        openFullscreen(this.src); // Ouvre l'image en plein écran
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var langueLink = document.getElementById("langueLink");
    langueLink.addEventListener("click", function(event) {
        event.preventDefault();
        // Changer la langue ici
        document.getElementById("langue").innerHTML = "<p>Language: English</p>";
    });
});
