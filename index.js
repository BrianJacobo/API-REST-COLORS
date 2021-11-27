const express = require('express');
const routerApi = require('./routes');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`GO http://localhost:${port}`);
});
