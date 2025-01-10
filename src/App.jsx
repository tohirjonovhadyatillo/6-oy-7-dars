import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isRegistered) {
      navigate('/register');
    } else if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate('/home');
    }
  }, [isRegistered, isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/register" element={<Register setIsRegistered={setIsRegistered} />} />
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/register" />} />
    </Routes>
  );
}

export default App;