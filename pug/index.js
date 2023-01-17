const express = require('express')
const app = express()

const PORT = 8080
app.use('/static', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.set('views', './views')
app.set('view engine', 'pug')


app.get('/hello', (req, res) => {
    res.render('hello.pug', { msn: 'Hello pug!! 🐶' })
});

app.get('/urlparam', (req, res) => {
    res.send(req.query);
});

app.post('urljson', (req, res) =>  {
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});
