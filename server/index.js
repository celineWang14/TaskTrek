// import
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json()); // 自动解析 JSON

// ✅ 建议将密码中的特殊字符转码或使用 .env 管理
const uri = 'mongodb://celinee:%21Wnn20041114@ac-bdflsvx-shard-00-00.1fa0xcc.mongodb.net:27017,ac-bdflsvx-shard-00-01.1fa0xcc.mongodb.net:27017,ac-bdflsvx-shard-00-02.1fa0xcc.mongodb.net:27017/?replicaSet=atlas-35fabf-shard-0&ssl=true&authSource=admin';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));


// ✅ 创建任务
app.post('/add', async (req, res) => {
  console.log("📥 Received:", req.body);
  const { task, category } = req.body;
  if (!task || task.trim() === '') {
    return res.status(400).json({ error: "Task content is required." });
  }
  try {
    const newTodo = await TodoModel.create({
      task,
      category: (category || "").trim() || "General"
    });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ 获取所有任务
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


// ✅ 更新任务为完成 / 未完成（切换状态）
app.put('/update/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await TodoModel.findById(id);
    if (!todo) return res.status(404).json({ error: "Task not found" });

    todo.done = !todo.done; // 切换完成状态
    await todo.save();

    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// ✅ 删除任务
app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;

  TodoModel.findByIdAndDelete(id)
    .then(result => {
      if (!result) return res.status(404).json({ error: "Task not found" });
      res.json(result);
    })
    .catch(err => res.status(500).json({ error: err.message }));
});


// 监听端口
app.listen(3001, () => {
  console.log('🚀 Server is running on http://localhost:3001');
});
