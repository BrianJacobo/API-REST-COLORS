const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');
const app = express();

const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

const port = process.env.PORT || 3000;

app.use(express.json());

// const whiteList = ['http://localost:8080', 'https://myapp.com'];
// const options = {
//   origin: (origin, callback) => {
//     if(whiteList.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback( new Error('no permitido'));
//     }
//   }
// }
// app.use(cors(options));
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`GO http://localhost:${port}`);
});
