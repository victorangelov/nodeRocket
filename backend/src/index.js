const express = require('express');

const app = express();

/**
 * Método HTTPS:
 * 
 * GET: Bucar informações do back-end
 * POST: Criar uma informação no back-end
 * PUT/PAT: alterar inforamção no back-end
 * put todos os dados, pat, algo específico
 * DELETE: deletar informações do back-end
 */

 //método get, para puxar informações do backend
app.get('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ]);
});
//método post, para criar informações no back-end
app.post('/projects', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
})
//método post, para alterar informações no back-end precisa ter o id na rota
app.put('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 3',
    ])
})
//método delete, para deletar informações no back-end precisa ter o id na rota
app.delete('/projects/:id', (request, response) => {
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3',
    ])
})

app.listen(3333, () => {
    console.log('🚀 Back-end iniciado!')
});