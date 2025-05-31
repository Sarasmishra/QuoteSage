// ThemeToggle.js
import React from 'react';

// A component to toggle light/dark theme
const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button onClick={toggleTheme} style={{
      marginTop: '1rem',
      padding: '0.5rem',
      backgroundColor: theme === 'light' ? '#ddd' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      border: 'none',
      borderRadius: '5px'
    }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
