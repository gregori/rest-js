const express = require('express');
const router = express.Router();

// get all
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET na rota de pedidos.'
    });
});

// create one
router.post('/', (req, res, next) => {
    const order = {
        id: req.body.id,
        qty: req.body.quantity
    };

    res.status(201).send({
        message: 'Pedido criado com sucesso.',
        newOrder: order
    });
});

// get one
router.get('/:id', (req, res, next) => {
    const id = req.params.id;

    if (id == 1) {
        msg = 'Você descobriu o ID especial';
    } else {
        msg = 'Você passou um ID qualquer';
    }
    res.status(200).send({
        mensagem: msg,
        id: id
    })
});

// update one
router.patch('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido atualizado com sucesso.'
    });
});

// delete one
router.delete('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Pedido removido com sucesso.'
    });
});

module.exports = router;