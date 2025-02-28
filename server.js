const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Caminho para o arquivo db.json
const dbPath = path.join(__dirname, 'db.json');

// Middleware para permitir CORS e parsear JSON
app.use(cors());
app.use(express.json());

// Rota para obter todos os dispositivos
app.get('/dispositivos', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    res.json(db.dispositivos);
})

// Rota para adicionar um dispositivo
app.post('/dispositivos', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const novoDispositivo = {
        id: Date.now(), // ID único
        ...req.body
    };
    db.dispositivos.push(novoDispositivo);
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
    res.status(201).json(novoDispositivo);
});

// Rota para editar um dispositivo
app.put('/dispositivos/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const dispositivoId = parseInt(req.params.id);
    const dispositivoIndex = db.dispositivos.findIndex(d => d.id === dispositivoId);

    if (dispositivoIndex !== -1) {
        db.dispositivos[dispositivoIndex] = { ...db.dispositivos[dispositivoIndex], ...req.body };
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        res.json(db.dispositivos[dispositivoIndex]);
    } else {
        res.status(404).json({ error: 'Dispositivo não encontrado' });
    }
});

// Rota para remover um dispositivo
app.delete('/dispositivos/:id', (req, res) => {
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const dispositivoId = parseInt(req.params.id);
    const dispositivoIndex = db.dispositivos.findIndex(d => d.id === dispositivoId);

    if (dispositivoIndex !== -1) {
        const [dispositivoRemovido] = db.dispositivos.splice(dispositivoIndex, 1);
        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        res.json(dispositivoRemovido);
    } else {
        res.status(404).json({ error: 'Dispositivo não encontrado' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});