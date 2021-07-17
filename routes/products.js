const express = require('express');
const router = express.Router();

// get all
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET na rota de produtos.'
    });
});

// create one
router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Produto criado com sucesso.'
    });
});

// get one
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    if (id == 1) {
        msg = 'ID especial';
    } else {
        msg = 'Você passou um ID';
    }
    res.status(200).send({
        mensagem: msg,
        id: id
    })
});

// update one
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto atualizado com sucesso.'
    });
});

// delete one
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Produto removido com sucesso.'
    });
});




module.exports = router;