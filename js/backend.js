const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Nenhum arquivo foi enviado.');
    }
    res.send(`Arquivo ${req.file.originalname} enviado com sucesso!`);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
