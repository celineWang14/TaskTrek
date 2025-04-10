import React, { useState, useEffect } from 'react';
import Create from './Create';
import axios from 'axios';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchTodos = () => {
    axios.get('http://localhost:3001/get')
      .then(res => setTodos(res.data))
      .catch(err => {
        console.log("❌ Error fetching todos:", err);
        setTodos([]);
      });
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleEdit = (id) => {
    axios.put('http://localhost:3001/update/' + id)
      .then(() => fetchTodos())
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/' + id)
      .then(() => fetchTodos())
      .catch(err => console.log(err));
  };

  const uniqueCategories = ['All', ...new Set(todos.map(todo => todo.category || 'General'))];

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">📋 TaskTrek</h2>

      {/* 分类筛选器 */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {uniqueCategories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition border ${selectedCategory === cat
                ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 新建任务 */}
      <Create onTaskAdded={fetchTodos} />

      {/* 任务列表 */}
      {todos.filter(todo => selectedCategory === 'All' || todo.category === selectedCategory).length === 0 ? (
        <div className="text-gray-400 text-center mt-8 text-sm italic">No tasks found in this category</div>
      ) : (
        <div className="space-y-3 mt-4">
          {todos
            .filter(todo => selectedCategory === 'All' || todo.category === selectedCategory)
            .map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 rounded-xl shadow-sm bg-gray-50 hover:bg-gray-100 transition-all border border-gray-200"
              >
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => handleEdit(todo._id)}>
                  {todo.done ? (
                    <CheckCircle className="text-green-500" size={22} />
                  ) : (
                    <Circle className="text-gray-400" size={22} />
                  )}
                  <div className="flex flex-col">
                    <p className={`font-semibold text-base ${todo.done ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                      {todo.task}
                    </p>
                    <span className="text-xs italic text-purple-500">{todo.category || 'General'}</span>
                  </div>
                </div>
                <Trash2
                  className="text-red-500 hover:text-red-600 transition cursor-pointer"
                  size={20}
                  onClick={() => handleDelete(todo._id)}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;
