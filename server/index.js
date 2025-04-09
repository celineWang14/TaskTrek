//import
const express = require('express')
const mongo = require('mongoose')
const cors = require('cors')
//create server with express
const app = express();
app.use(cors());
//automactically pase json
app.use(express.json());
//listen to port 3001
app.listen(3001, () => {
  console.log('Server is running')
})
