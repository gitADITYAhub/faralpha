const express = require('express');
const app = express();
const port = 8080; 

app.get('/sayHello', (req, res) => {
  res.json({ message: 'Hello User' }); 
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
