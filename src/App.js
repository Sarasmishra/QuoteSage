// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import QuoteButton from './components/QuoteButton';
import FontSizeDropdown from './components/FontSizeDropdown';
import ThemeToggle from './components/ThemeToggle';


function App() {
  // State for quote text and author
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  // Theme: 'light' or 'dark'
  const [theme, setTheme] = useState('light');

  // Font size (affects QuoteCard text)
  const [fontSize, setFontSize] = useState('20px');

  // Like state: true or false
  const [liked, setLiked] = useState(false);

  // Function to fetch quote from API
  const fetchQuote = async () => {
    try {
       const url = `https://api.allorigins.win/raw?url=${encodeURIComponent(
      `https://zenquotes.io/api/random?timestamp=${Date.now()}`
    )}`;
      const response = await axios.get(url);
      const data = response.data[0];
      setQuote(data.q);
      setAuthor(data.a);
      setLiked(false); // Reset like state for new quote
    } catch (error) {
      console.error('Error fetching quote:', error);
      setQuote('Failed to fetch quote.');
      setAuthor('Try again later.');
    }
  };

  // Run once on component mount
  useEffect(() => {
    fetchQuote();
  }, []);

  // Toggle light/dark theme
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Get color based on theme
  const themeColor = theme === 'light' ? '#000' : '#fff';
  const bgColor = theme === 'light' ? '#f5f5f5' : '#222';

  return (
    <div style={{ 
      backgroundColor: bgColor, 
      color: themeColor, 
      minHeight: '100vh', 
      padding: '2rem',
      textAlign: 'center' 
    }}>
      <h1>QuoteSage - Daily Inspiration</h1>

      {/* QuoteCard displays the current quote */}
      <QuoteCard
        quote={quote}
        author={author}
        fontSize={fontSize}
        themeColor={themeColor}
        liked={liked}
      />

      {/* Buttons for new quote and like */}
      <QuoteButton label="New Quote" onClick={fetchQuote} />
      <QuoteButton label={liked ? "Unlike" : "Like"} onClick={() => setLiked(!liked)} />

      {/* Font size dropdown */}
      <div style={{ marginTop: '1rem' }}>
        <label style={{ marginRight: '0.5rem' }}>Font Size:</label>
        <FontSizeDropdown fontSize={fontSize} setFontSize={setFontSize} />
      </div>

      {/* Theme toggle button */}
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
    </div>
  );
}

export default App;
