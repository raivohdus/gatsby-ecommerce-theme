import React from 'react';
import './Header.css'; // Import the CSS file if you want to add custom styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        {/* Add your application's logo */}
        <img src="/path/to/your/logo.png" alt="Your App Name" />
      </div>
      <nav className="navigation">
        {/* Add your navigation links */}
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </nav>
      <div className="search-container">
        {/* Add a search bar for searching photos */}
        <input type="text" placeholder="Search photos..." />
      </div>
    </header>
  );
};

export default Header;
