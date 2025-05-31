# QuoteSage – A Daily Quote Generator

## Overview
QuoteSage is a React-based web application that displays motivational quotes to users. It fetches quotes from the ZenQuotes API and allows users to:

- View a random motivational quote with the author’s name.
- Refresh to see a new quote.
- Like (favorite) quotes locally.
- Customize the quote font size.
- Toggle between light and dark themes.

This project demonstrates React concepts like components, props, hooks (`useState`), and asynchronous API calls with Axios.

---

## Features
- Fetches random quotes using Axios from [ZenQuotes API](https://zenquotes.io/api/random).
- Displays quote text and author.
- "New Quote" button to fetch a new random quote.
- Like button toggles local like state.
- Font size customization via dropdown.
- Light/Dark theme toggle.
- Error handling for failed API calls.

---

## Technologies Used
- React (functional components and hooks)
- Axios (HTTP client)
- CSS for styling

---

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sarasmishra/QuoteSage.git

## Usage Instructions
1. Click the New Quote button to fetch and display a new motivational quote.

2. Click the Like button to toggle your liking of the current quote.

3. Use the Font Size dropdown to adjust the size of the quote text.

4. Toggle between Light and Dark modes using the theme toggle button.

## Project Structure
- src/App.js — Main React component managing state, API calls, and layout.

- src/components/QuoteCard.js — Displays the quote and author.

- src/components/QuoteButton.js — Reusable button component.

- src/components/ThemeToggle.js — Switches between light and dark themes.

- src/index.js — Entry point for React.

- src/styles.css — Basic styles for the app.

## Important Notes
- The ZenQuotes API may have CORS restrictions. If you experience errors fetching quotes, consider using a CORS proxy or adjusting your browser settings.

- This app focuses on functionality; styling is basic and can be enhanced further.

- The like state is local only and will reset on page reload.
