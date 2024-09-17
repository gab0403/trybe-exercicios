const express = require('express');
// const rescue = require('express-rescue');
const router = require('./routers/index');

const app = express();
app.use(express.json());

const port = 3000;

app.use('/ping', router.cepRouter);
app.use('/cep/:cep', router.cepRouter);
app.use('/cep', router.cepRouter);


app.listen(port, () => console.log('Online'));