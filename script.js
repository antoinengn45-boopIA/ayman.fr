const liste = document.getElementById("listeContacts");
const form = document.getElementById("contactForm");
const searchInput = document.getElementById("search");

// Charger les contacts depuis l'API
async function chargerContacts() {
    const res = await fetch("/api/contacts");
    return await res.json();
}

// Afficher les contacts
async function afficherContacts(filtre = "") {
    const contacts = await chargerContacts();
    liste.innerHTML = "";

    const filtreLower = filtre.toLowerCase();

    contacts
        .filter(c => {
            const texte = `${c.prenom} ${c.nom} ${c.email} ${c.telephone} ${c.adresse}`.toLowerCase();
            return texte.includes(filtreLower);
        })
        .forEach((c, index) => {
            const div = document.createElement("div");
            div.className = "contact";

            div.innerHTML = `
                <span><strong>Prénom :</strong> ${c.prenom}</span>
                <span><strong>Nom :</strong> ${c.nom}</span>
                <span><strong>Adresse :</strong> ${c.adresse}</span>
                <span><strong>Téléphone :</strong> ${c.telephone}</span>
                <span><strong>Email :</strong> ${c.email}</span>
                <button class="delete-btn" onclick="supprimerContact(${index})">Supprimer</button>
            `;

            liste.appendChild(div);
        });
}

// Ajouter un contact
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const contact = {
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        adresse: document.getElementById("adresse").value,
        telephone: document.getElementById("telephone").value,
        email: document.getElementById("email").value
    };

    await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
    });

    form.reset();
    afficherContacts(searchInput.value);
});

// Supprimer un contact
async function supprimerContact(index) {
    await fetch(`/api/contacts/${index}`, { method: "DELETE" });
    afficherContacts(searchInput.value);
}

// Recherche instantanée
searchInput.addEventListener("input", () => {
    afficherContacts(searchInput.value);
});

// Initialisation
afficherContacts();
