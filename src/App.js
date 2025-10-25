// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//        <h1 className="text-3xl font-bold underline">
//       Hello world!
//     </h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p className='bg-red-500'>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/dashboard";
import ChatWidget from "./components/ChatWidget";

export default function App() {
  return (
    <Router>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Financial Dashboard</h1>
          <button className="text-white text-lg rounded py-3 px-12 font-semibold bg-red-500">
            Logout
          </button>
        </div>
      </header>

      <main className="min-h-screen max-w-7xl mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/chat" element={<ChatWidget />} />
        </Routes>
      </main>
    </Router>
  );
}
