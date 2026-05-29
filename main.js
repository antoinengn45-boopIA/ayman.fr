document.addEventListener('DOMContentLoaded', () => {
    console.log("Bienvenue sur ayman.fr");
    
    // Exemple : Animation simple au chargement
    const card = document.querySelector('.card');
    card.style.opacity = 0;
    card.style.transition = "opacity 1.5s ease-in";
    
    setTimeout(() => {
        card.style.opacity = 1;
    }, 100);
});
