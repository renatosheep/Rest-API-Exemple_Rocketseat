const express = require('express');
const app = express();
const data = require('./data.json');

// Verbos HTTP
//GET: Receber dados de um Resource;
//POST: Enviar dados ou informações para serem processados por um Resource;
//PUT: Atualizar os dados de um Resource;
//DELETE: Deletar um Resource;

// http:localhost:3000/clients */Clients seria o Resource*/

app.get('/clients', function(req, res){
    res.json(data);
});

app.get('/clients/:id', function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json();

    res.json(client);
});

app.post('/clients', function(req, res){
    const { name, email } = req.body;

    //Salvar

    res.json({ name, email });

});

app.put('/clients/:id', function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)

    if (!client) return res.status(204).json();

    const { name } = req.body;

    client.name = name;

    res.json(client);

});

app.delete('/clients/:id');
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);

    res.json(clientsFiltered);



app.listen(3000, function(req, res){
    
    console.log('Server is running')
});

