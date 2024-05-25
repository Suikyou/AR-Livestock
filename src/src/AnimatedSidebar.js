import React, { useState } from 'react';
import './CSS/AnimatedSidebar.css';

const AnimatedSidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? 'Close Sidebar' : '☰'}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <button className="close-sidebar" onClick={toggleSidebar}>×</button>
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default AnimatedSidebar;
