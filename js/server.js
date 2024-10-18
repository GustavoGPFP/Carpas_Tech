const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Para carregar variáveis de ambiente

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    options: {
        trustServerCertificate: true,
    }
};

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

let pool;

async function connectToSQL() {
    if (!pool) {
        try {
            pool = await sql.connect(sqlConfig);
            console.log('Conectado ao SQL Server!');
        } catch (err) {
            console.error('Erro ao conectar ao SQL Server:', err);
        }
    }
}

app.post('/submit', async (req, res) => {
    const { email, senha } = req.body;

    try {
        await connectToSQL();

        const hashedPassword = await bcrypt.hash(senha, 10);
        await pool.request()
            .input('Email', sql.VarChar, email)
            .input('Senha', sql.VarChar, hashedPassword)
            .query('INSERT INTO Usuarios (Email, Senha) VALUES (@Email, @Senha)');

        res.send('Dados inseridos com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir os dados:', err);
        res.status(500).send('Erro ao inserir os dados.');
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html');
});

app.listen(port, async () => {
    await connectToSQL();
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Tratamento de encerramento do processo
process.on('SIGINT', async () => {
    await pool.close();
    console.log('Conexão com o banco de dados encerrada.');
    process.exit(0);
});



