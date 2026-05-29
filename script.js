// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    console.log("Ayman.fr est prêt !");

    // Exemple : Ajouter un petit effet au survol des cartes
    const cards = document.querySelectorAll('.bg-[#1F1F1F]');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease';
            card.style.transform = 'scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
});
