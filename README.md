# 📘 Répertoire de contacts – ayman.fr
Un mini‑projet complet permettant de gérer un répertoire de contacts (nom, prénom, adresse, téléphone, email) avec :

Une interface web simple (HTML/CSS/JS)

Un moteur de recherche instantané

Une API REST (Node.js + Express)

Une “base de données” locale en JSON (contacts.json)

Une structure compatible GitHub + déploiement Railway/Render

📁 Structure du projet
Code
ayman-repertoire/
│
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│
├── contacts.json
├── server.js
├── package.json
└── README.md
🚀 Fonctionnalités
Ajouter un contact

Supprimer un contact

Rechercher instantanément (nom, prénom, email, téléphone, adresse)

Stockage persistant via fichier JSON

API REST simple et extensible

Interface moderne et responsive

🔧 Installation
1. Cloner le projet
bash
git clone https://github.com/ton-compte/ayman-repertoire.git
cd ayman-repertoire
2. Installer les dépendances
bash
npm install
3. Lancer le serveur
bash
npm start
Le site sera accessible sur :

Code
http://localhost:3000
🌐 API REST
📌 GET – Récupérer tous les contacts
Code
GET /api/contacts
📌 POST – Ajouter un contact
Code
POST /api/contacts
Content-Type: application/json
Exemple :

json
{
  "prenom": "Ayman",
  "nom": "Dupont",
  "adresse": "12 rue de Paris",
  "telephone": "0601020304",
  "email": "ayman@example.com"
}
📌 DELETE – Supprimer un contact
Code
DELETE /api/contacts/:id
🗄️ Base de données
Les données sont stockées dans :

Code
contacts.json
Format :

json
[
  {
    "prenom": "Ayman",
    "nom": "Dupont",
    "adresse": "12 rue de Paris",
    "telephone": "0601020304",
    "email": "ayman@example.com"
  }
]
☁️ Déploiement
🚀 Déployer sur Railway (recommandé)
Crée un repo GitHub avec ce projet

Va sur https://railway.app

Clique New Project → Deploy from GitHub

Sélectionne ton repo

Railway détectera automatiquement server.js

Ajoute une variable :

Code
PORT = 3000
Déploie 🎉

📄 Licence
Projet libre d’utilisation pour usage personnel ou éducatif.

👤 Auteur
Ayman  
Projet : Répertoire de contacts – ayman.fr
