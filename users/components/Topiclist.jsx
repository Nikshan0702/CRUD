import React from 'react';
import Link from 'next/link';

export default function Topiclist() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Topics</h1>
        <Link
          href="/Add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Add New Topic
        </Link>
      </div>

      {/* Topics List */}
      <div className="space-y-4">
        {/* Topic Item - Example 1 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">React Fundamentals</h2>
              <p className="text-gray-600 mt-1">Learn the core concepts of React</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/Add"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Edit
              </Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>

        {/* Topic Item - Example 2 */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Next.js Routing</h2>
              <p className="text-gray-600 mt-1">Understanding file-based routing</p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/Add"
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                Edit
              </Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
