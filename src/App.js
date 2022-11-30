import React from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Preview from './Preview';
import Chats from './Chats';

function App() {
  return (
    <div className="app">
      <Router>
        <div className='app__body' >
        <Routes>
          <Route path='/' element={<WebcamCapture />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='/chats' elements={<Chats />} />
        </Routes>
        </div>
      </Router>
    </div>  
  );
}

export default App;
