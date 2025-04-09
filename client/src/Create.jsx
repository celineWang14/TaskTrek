import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Create = () => {
  const [task, setTask] = useState([]);
  //send data to backend
  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task: task })
      .then(res => {
        console.log(res);
      }).catch(error =>
        console.log(error))
  }

  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        onChange={(e) => setTask(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
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
