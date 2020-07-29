const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json());

app.use('/', express.static(__dirname + '/../dist'));

app.get('/', (req, res) => {
  res.send(req.body);
});

app.put('/customers/data', (req, res) => {
  res.json({ url: '/customers/data', body: req.body, headers: req.headers });
});

app.put('/customers/subscription', (req, res) => {
  res.json({ url: '/customers/subscription', body: req.body, headers: req.headers });
});

app.post('/users/event', (req, res) => {
  // res.json({ url: '/users/event', body: req.body, headers: req.headers });
  res.status(400).send({
    message: 'This is an error!',
  });
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
