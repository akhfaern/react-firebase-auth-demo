import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import Register from './components/Register';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        {user 
          ? <Profile user={user} /> 
          : <Routes>
              <Route path="/" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register setUser={setUser} />} />
            </Routes>}
      </header>
    </div>
  );
}

export default App;
