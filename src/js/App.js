import React from 'react';
import '../css/App.css';
import {Works} from "./components/works";
import {Profile} from "./components/profile";
import {Home} from "./components/home"

function App() {
  return (
    <div className="App">
      <Home/>
      <Profile/>
      <Works/>
    </div>


  );
}

export default App;
