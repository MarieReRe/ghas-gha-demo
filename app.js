const express = require('express');
const app = express();

app.get('/search', (req, res) => {
  const query = req.query.q || '';
  console.log(query);
  res.send('ok');
});

app.listen(3000);