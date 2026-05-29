import express from "express";
import fs from "fs";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

const DB_FILE = "./contacts.json";

app.use(express.json());
app.use(express.static("public")); // index.html, style.css, script.js

// Lire les contacts
function lireContacts() {
    if (!fs.existsSync(DB_FILE)) return [];
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data || "[]");
}

// Écrire les contacts
function ecrireContacts(contacts) {
    fs.writeFileSync(DB_FILE, JSON.stringify(contacts, null, 2));
}

// GET : récupérer tous les contacts
app.get("/api/contacts", (req, res) => {
    res.json(lireContacts());
});

// POST : ajouter un contact
app.post("/api/contacts", (req, res) => {
    const contacts = lireContacts();
    contacts.push(req.body);
    ecrireContacts(contacts);
    res.status(201).json({ ok: true });
});

// DELETE : supprimer un contact
app.delete("/api/contacts/:id", (req, res) => {
    const id = parseInt(req.params.id, 10);
    const contacts = lireContacts();

    if (id < 0 || id >= contacts.length) {
        return res.status(400).json({ error: "Index invalide" });
    }

    contacts.splice(id, 1);
    ecrireContacts(contacts);

    res.json({ ok: true });
});

// Lancer le serveur
app.listen(PORT, () => {
    console.log("Serveur démarré sur le port", PORT);
});
