//import
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')
//create server with express
const app = express();
app.use(cors());

//automactically pase json
app.use(express.json());

const uri = 'mongodb://celinee:!Wnn20041114@ac-bdflsvx-shard-00-00.1fa0xcc.mongodb.net:27017,ac-bdflsvx-shard-00-01.1fa0xcc.mongodb.net:27017,ac-bdflsvx-shard-00-02.1fa0xcc.mongodb.net:27017/?replicaSet=atlas-35fabf-shard-0&ssl=true&authSource=admin';

mongoose.connect(uri)
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.post('/add', (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task
  }).then(result => res.json(result))
    .catch(err => res.json(err));
})

app.get('/get', async (req, res) => {
  try {
    const todos = await TodoModel.find();
    console.log("📦 Sending todos:", todos);
    res.json(todos);
  } catch (error) {
    console.error("❌ Error fetching todos:", error);
    res.status(500).json({ error: error.message });
  }
});


app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id })
    .then(result => res.json(result))
    .catch(err => res.json(err));
})

//listen to port 3001
app.listen(3001, () => {
  console.log('Server is running')
})
