/**
 * GET    - Buscar uma informação dentro do servidor
 * POST   - Inserir informação dentro do servidor
 * PUT    - Alterar uma informação dentro do servidor
 * PATCH  - Alterar uma informação específica dentro do servidor (Ex.: Foto do perfil somente)
 * DELETE - Deletar uma informação dentro do servidor
 */

const express = require('express');

const app = express();

// Middleware definindo que iremos receber json como parâmetros body
app.use(express.json());

// Query Params => Paginação Filtro (Parâmetros opcionais)
app.get('/courses', (req, res) => {
  const query = req.query;
  res.json({
    query: query,
    data: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
  });
});

//Body Params => Objeto para inseração ou alteração
app.post('/courses', (req, res) => {
  const body = req.body;
  res.json({
    body: body,
    data: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
  });
});

// Route Params => Identificar um recurso editar/deletar/buscar (Parâmetro obrigatório)
app.put('/courses/:id', (req, res) => {
  const params = req.params;
  res.json({
    params: params,
    data: ['Course Altered', 'Course 2', 'Course 3', 'Course 4'],
  });
});

app.patch('/courses/:id', (req, res) => {
  const params = req.params;
  res.json({
    params: params,
    data: ['Course altered', 'Course altered 2', 'Course 3', 'Course 4'],
  });
});

app.delete('/courses/:id', (req, res) => {
  const params = req.params;
  res.json({
    params: params,
    data: ['Course altered 2', 'Course 3', 'Course 4'],
  });
});

app.listen(3333);
