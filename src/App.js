import React from 'react'
import Navbar from './Navbar/Navbar'
import { useTheme } from './Navbar/ThemeContext'
import './App.css';
import DataComponent from './DataComponent';

const App = () => {
  const {isDarkMode,toggleTheme} = useTheme();
  return (
    <div className={isDarkMode? 'dark-mode':'light-mode'}>
      <Navbar />
    <div>App</div>
    <DataComponent />
    </div>
    
  )
}

export default App