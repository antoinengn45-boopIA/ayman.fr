const form = document.getElementById("contactForm");
const liste = document.getElementById("listeContacts");
const searchInput = document.getElementById("search");

let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function afficherContacts(filtre = "") {
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

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const contact = {
        prenom: document.getElementById("prenom").value,
        nom: document.getElementById("nom").value,
        adresse: document.getElementById("adresse").value,
        telephone: document.getElementById("telephone").value,
        email: document.getElementById("email").value
    };

    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));

    form.reset();
    afficherContacts(searchInput.value);
});

function supprimerContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    afficherContacts(searchInput.value);
}

searchInput.addEventListener("input", () => {
    afficherContacts(searchInput.value);
});

afficherContacts();
