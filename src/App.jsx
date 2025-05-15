import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Welcome to My App</h1>
        <p className="text-lg text-gray-600">This is a simple React component styled with Tailwind CSS.</p>
      </header>
      <main className="flex flex-col items-center">
        <div className="card bg-white shadow-md rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold text-gray-700">Card Title</h2>
          <p className="text-gray-500">This is a card component styled with Tailwind CSS.</p>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Click Me
        </button>
      </main>
    </div>
  );
}

export default App;
