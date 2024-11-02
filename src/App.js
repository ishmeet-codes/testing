// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MembersList from './components/MembersList';
import MemberProfile from './components/MemberProfile';

const App = () => {
    return (
        <Router>
            <div>
                <h1>Club Members</h1>
                <Routes>
                    <Route path="/" element={<MembersList />} />
                    <Route path="/member/:id" element={<MemberProfile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
