import React from 'react'
import { useTheme } from './ThemeContext'
import './Navbar.css';

const Navbar = () => {
    const{isDarkMode,toggleTheme} = useTheme();
  return (
    <nav className={`navbar ${isDarkMode ? 'dark':'light'}`}>
        <div>Refreshing</div>
        <button className = "button" onClick={toggleTheme}>
            {isDarkMode ? 'switch to light mode' : 'switch to dark mode'}
        </button>
    </nav>
    
  )
}

export default Navbar