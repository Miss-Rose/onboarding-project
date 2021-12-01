const express = require('express');
const engine = require('express-handlebars');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const port = 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.static('app/styles'));
app.use(express.static( 'public'));
app.use(express.static( 'app/images'));

app.get('/', async (req, res) => {
    const response = await fetch('http://demo7391349.mockable.io/products');
    const { data } = await response.json();
    res.render('home', { data });
});

app.get('/product/:id', async (req, res) => {
    const response = await fetch('http://demo7391349.mockable.io/products');
    const { data } = await response.json();
    const product = await data.find(({id}) =>  req.params.id === id);
    res.render('productDetail', product);
});

app.get('/product/add', async (req, res) => {
    const response = await fetch('http://demo7391349.mockable.io/products');
    const { data } = await response.json();
    const product = await data.find(({id}) =>  req.params.id === id);
    res.render('productDetail', product);
});

app.listen(port, () => {
    console.log(`Server was started`);
})
