import React from 'react';

export default function Edit() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Description"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Update
        </button>
      </form>
    </div>
  );
}
