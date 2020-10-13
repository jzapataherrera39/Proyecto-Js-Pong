const express = require('express'); 
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('Bienvido a la creacion de esta api basica!, Este Api fue desarrollada por Jorge Zapata, Veronica Sandon, Heydi estrada, Leonardo berrocal'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 
process.env.RUNKIT_ENDPOINT_URL;
