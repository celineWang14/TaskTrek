import React, { useState } from 'react';
import Create from './Create';

const Home = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Todo List</h2>
      <Create />
      {
        tasks.length === 0 ? (
          <div className="text-gray-500 text-center mt-4">No Record</div>
        ) : (
          <div className="space-y-2 mt-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded shadow-sm hover:bg-gray-200 transition"
              >
                {task}
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
};

export default Home;
