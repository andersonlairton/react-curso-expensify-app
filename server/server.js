const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
//configurando porta
const port =process.env.PORT || 3000;

app.use(express.static(publicPath));
///configurando as outras paginas
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('servidor subiu!');
    ////para executar tem que se digitar no terminal node server(pasta que se encontra)/(nome do arquivo.js)server.js
})
