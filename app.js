const express = require('express');
const app = express(); 
const port = 3000; 
app.get('/', (req, res) => { 
  res.send('Bienvenidos a la creación de esta Api básica!, Este Api fue desarrollada por Jorge Andres  Zapata, Veronica Sandon, Heydi Estrada, Leonardo berrocal'); 
}) 

app.listen(port, () => { 
  console.log(`Example app listening at http://localhost:${port}`); 
}) 



