const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('hello i am giving you a chance ');
});

app.get('/products', (req, res) => {
    res.send([
        {
            id: '01',
            name: 'apple'
        },
        {
            id: '02',
            name: 'pineapple'
        }
    ])
});

app.listen(port, () => {
    console.log(`listning at pport number ${port}`);
})