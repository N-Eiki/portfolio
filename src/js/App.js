import React from 'react';
import '../css/App.css';
import {Works} from "./components/works";
import {Profile} from "./components/profile";
import {Home} from "./components/home"
import {Contact} from "./components/contact"

function App() {
  return (
    <div className="App">
      <Home/>
      <Profile/>
      <Works/>
      <Contact />
    </div>


  );
}

export default App;
