import React, { useState } from 'react';
import axios from 'axios';

const Create = ({ onTaskAdded }) => {
  const [task, setTask] = useState('');
  const [category, setCategory] = useState('');

  const handleAdd = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    axios.post('http://localhost:3001/add', {
      task: task.trim(),
      category: category.trim()
    })
      .then(res => {
        setTask('');
        setCategory('');
        if (onTaskAdded) onTaskAdded();
      })
      .catch(error => console.log(error));

    console.log("Sending to backend:", { task, category });

  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <input
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        type="text"
        placeholder="Category (optional)"
        className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
      <button
        onClick={handleAdd}
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
};

export default Create;
