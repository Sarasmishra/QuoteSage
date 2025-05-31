// QuoteCard.js
import React from 'react';

// A component to display the quote and author
const QuoteCard = ({ quote, author, fontSize, themeColor, liked }) => {
  return (
    <div style={{ 
      border: `2px solid ${themeColor}`, 
      padding: '1rem', 
      borderRadius: '10px',
      color: themeColor,
      fontSize: fontSize,
    }}>
      <p>"{quote}"</p>
      <p><strong>- {author}</strong></p>
      {/* Show like status */}
      <p>{liked ? "❤️ Liked" : "♡ Like"}</p>
    </div>
  );
};

export default QuoteCard;
