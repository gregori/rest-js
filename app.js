const express = require('express');
const morgan = require('morgan');

const app = express();

const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');


app.use(morgan('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allor-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', 
        'Content-Type, Origin, X-Requested-With, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }

    next();
});

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

// rota não encontrada
app.use((req, res, next) => {
    const error =  new Error('Não encontrado');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        error: {
            message: error.message
        }
    });
});

module.exports = app;