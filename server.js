const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Sert les fichiers statiques (tes fichiers HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`Serveur actif sur http://localhost:${PORT}`);
});
