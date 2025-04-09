import React from 'react';

const Create = () => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <input
        type="text"
        placeholder="Enter a task"
        className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="button"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Add
      </button>
    </div>
  );
};

export default Create;
