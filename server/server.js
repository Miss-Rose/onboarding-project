const express = require('express');
const engine = require('express-handlebars');
const fetch = require('node-fetch');
const app = express();
const port = 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.use(express.static('styles'));

app.get('/', async (req, res) => {
    const response = await fetch('http://demo7391349.mockable.io/products');
    const { data } = await response.json();
    res.render('home', { data });
});

app.listen(port, () => {
    console.log(`Server was started`);
})
