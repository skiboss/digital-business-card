import './App.css'
import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Media from './components/media';

class App extends React.Component {
  render() {
    return (
        <div className='main'>
            <Info />
            <About />
            <Media />
        </div>
    );
  }
}

export default App
