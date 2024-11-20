"use client"
import React from 'react'
import Link from 'next/link';
function notFound() {
    
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link href="/">
        <p className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Go Back Home
        </p>
      </Link>
    </div>
  );
};

export default notFound