import React, { useState, useEffect } from 'react';
import Create from './Create';
import axios from 'axios';
import { CheckCircle, Circle, Trash2 } from 'lucide-react'; // ✅ Icons only

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(res => {
        console.log("✅ Fetched todos:", res.data);
        setTodos(res.data);
      })
      .catch(err => {
        console.log("❌ Error fetching todos:", err);
        setTodos([]); // handle fetch error gracefully
      });
  }, []);



  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/' + id)
      .then(res => location.reload())
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/' + id)
      .then(res => location.reload())
      .catch(err => console.log(err));
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Todo List</h2>
      <Create />
      {
        todos.length === 0 ? (
          <div className="text-gray-500 text-center mt-4">No Record</div>
        ) : (
          <div className="space-y-2 mt-4">
            {todos.map((todo, index) => (
              <div
                key={index}
                className="bg-gray-100 p-3 rounded shadow-sm flex justify-between items-center hover:bg-gray-200 transition"
              >
                <div className='checkbox flex items-center gap-5' onClick={() => handleEdit(todo._id)}>
                  {todo.done ? (
                    <CheckCircle className="text-green-500 cursor-pointer" size={20} />
                  ) : (
                    <Circle className="text-gray-400 cursor-pointer" size={20} />
                  )}
                  <p className={todo.done ? 'line-through text-gray-500' : ''}>{todo.task}</p>
                </div>
                <div className="flex gap-2">
                  <Trash2 className="text-red-500 cursor-pointer" size={20} onClick={() => handleDelete(todo._id)} />
                </div>
              </div>
            ))}
          </div>
        )
      }
    </div>
  );
}
export default Home;
