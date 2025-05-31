// QuoteButton.js
import React from 'react';

// A reusable button component
const QuoteButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} style={{
      margin: '0.5rem',
      padding: '0.5rem 1rem',
      cursor: 'pointer'
    }}>
      {label}
    </button>
  );
};

export default QuoteButton;
