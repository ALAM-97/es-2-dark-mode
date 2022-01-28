import React from 'react';
//style
import './App.css';
//components
import Articles from './components/Articles';

function App() {

  const darkMode = isDark => {
    if ( isDark === true) {
      document.body.style.background = '#111111';
      document.body.style.transition = '.6s';
    } else {
      document.body.style.background = '#EFEFEF';
      document.body.style.transition = '.6s';
    }
  }

  return (
    <div className="App">
      <Articles toggleMode= { darkMode } />
    </div>
  );
}

export default App;
