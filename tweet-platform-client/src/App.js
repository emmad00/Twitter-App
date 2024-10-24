// src/App.js
import React, { useState } from 'react';
import Login from './components/Login';       // Update path if necessary
import Dashboard from './components/Dashboard'; // Update path if necessary

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Logic for handling login
        setIsLoggedIn(true);
    };

    return (
        <div>
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <Dashboard />
            )}
        </div>
    );
};

export default App;
