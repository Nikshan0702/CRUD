
// "use client";

// import React, { useState } from 'react';
// import useRouter from "next/navigation"

// export default function Add() {

//  const[title,settiltel]=useState("");
//  const[description,setdescription]=useState("");

//   const router =useRouter();
//    const handleSubmit = async (e) =>{
//     e.preventDefault();
    
//     if(!title || !description){
//       alert("empty");
//       return;
//     }

//     try{
//       const res = await fetch("http://localhost:3000/api/ttitle",{
//         method: "POST",
//         headers:{
//           "Content-type":"application/json",
//         },
//         body:JSON.stringify({title,description}),
//       });

//       if(res.ok){
//         router.push('/');
//       }
      
//     }catch(error){

//     }
//    }
  
//   return (
//     <div className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-gray-50 p-4">
//       <form className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4">
//         <input
//         onChange={(e)=> settiltel(e.target.value)}
//         value={title}
//           type="text"
//           placeholder="Title"
//           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <input
//         onChange={(e)=> setdescription(e.target.value)}
//         value={description}
//           type="text"
//           placeholder="Description"
//           className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }


/////above spelling mistakes , and there are no handlesubmit function 
"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      console.log("Submitting:", { title, description }); // Debug log
      
      const response = await fetch('/api/ttitle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title: title.trim(),
          description: description.trim()
        }),
      });

      const responseData = await response.json();
      console.log("Response:", responseData); // Debug log

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to create topic");
      }

      router.push('/');
      router.refresh();
    } catch (error) {
      console.error("Full submission error:", error); // Debug log
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Topic</h2>
        
        {error && (
          <div className="p-3 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={3}
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Description *
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            minLength={5}
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
            isLoading ? 'opacity-70 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? 'Creating...' : 'Create Topic'}
        </button>
      </form>
    </div>
  );
}