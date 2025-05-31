// FontSizeDropdown.js
import React from 'react';

// Optional dropdown to change font size
const FontSizeDropdown = ({ fontSize, setFontSize }) => {
  return (
    <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
      <option value="16px">Small</option>
      <option value="20px">Medium</option>
      <option value="24px">Large</option>
    </select>
  );
};

export default FontSizeDropdown;
