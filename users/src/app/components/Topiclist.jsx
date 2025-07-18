"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function TopicList() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const fetchTopics = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/ttitle', {
        cache: "no-store",
      });

      if (!res.ok) throw new Error('Failed to fetch topics');
      const data = await res.json();
      setTopics(data.topics || data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteTopic = async (id) => {
    try {
      const res = await fetch(`/api/ttitle?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete topic');
      fetchTopics(); // Refresh the list
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  if (error) return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {error}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Topics</h1>
        <Link
          href="/Add"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Add New Topic
        </Link>
      </div>

      {topics.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No topics found</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {topics.map((t) => (
            <div key={t._id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{t.title}</h2>
                    <p className="text-gray-600">{t.description}</p>
                  </div>
                  <div className="flex space-x-3">
                  <Link 
                   href={`/Edit/${t._id}`}  // Must match the folder name exactly
                   className="text-blue-600 hover:text-blue-800">Edit</Link>
                      <button
                      onClick={() => deleteTopic(t._id)}
                      className="text-red-600 hover:text-red-800 font-medium">
                      Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}