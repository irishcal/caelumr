
import React from 'react';

const ThemeToggle: React.FC = () => {
  return (
    <div className="theme-toggle">
      <input type="checkbox" id="theme-toggle" />
      <label htmlFor="theme-toggle" className="theme-label">
        Theme
      </label>
    </div>
  );
};

export default ThemeToggle;
