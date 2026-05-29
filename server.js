const express = require('express');
const app = express();

app.use(express.json());

// Exemple de route API pour ton site
app.get('/api/projets', (req, res) => {
    res.json({
        projets: [
            { nom: 'Framework Web', status: 'actif' },
            { nom: 'SandBlock Studio', status: 'en cours' }
        ]
    });
});

app.listen(8080, () => console.log('API serveur démarrée sur le port 8080'));
