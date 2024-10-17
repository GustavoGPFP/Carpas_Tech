// Conexão com o banco de dados
async function connectToSQL() {
    try {
        await sql.connect(sqlConfig);
        console.log('Conectado ao SQL Server!');
    } catch (err) {
        console.error('Erro ao conectar ao SQL Server:', err);
    }
}

const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

// Configurações do SQL Server
const sqlConfig = {
    user: 'GUSTAVO/gust',          // Seu usuário do SQL Server
    password: '',                  // Sua senha do SQL Server
    database: 'carpas_tech',      // Nome do banco de dados
    server: 'localhost\\SQLEXPRESS',           // Servidor onde está o SQL Server
    options: {
        trustServerCertificate: true,  // Necessário para ambientes de desenvolvimento
    }
};

const app = express();
const port = 3001; // ou qualquer outra porta que você preferir

// Middleware para parsear dados enviados pelo formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para servir arquivos estáticos da pasta 'public'
app.use(express.static('public'));



// Rota para receber dados do formulário
app.post('/submit', async (req, res) => {
    const { email, senha } = req.body;
    
    try {
        // Conectando ao banco de dados
        await connectToSQL();
        
        // Executando a query de inserção
        const result = await sql.query`INSERT INTO Usuarios (Email, Senha) VALUES (${email}, ${senha})`;

        res.send('Dados inseridos com sucesso!');
    } catch (err) {
        console.error('Erro ao inserir os dados:', err);
        res.send('Erro ao inserir os dados.');
    }
});

// Rota para a raiz do servidor
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); // Serve o arquivo form.html
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


