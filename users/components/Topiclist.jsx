import React from 'react';
import Link from 'next/link';

export default function Topiclist() {
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      {/* Add Button */}
      <div>
        <Link
          href="/Add"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add New Topic
        </Link>
      </div>

      {/* Topic Item */}
      <div className="bg-white p-4 rounded shadow flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">Title</h2>
          <p className="text-gray-600">Description</p>
        </div>

        <div className="flex space-x-3">
          {/* Remove button */}
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
            Remove
          </button>

          {/* Edit Link */}
          <Link
            href="/Add"
            className="text-blue-600 hover:underline"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
