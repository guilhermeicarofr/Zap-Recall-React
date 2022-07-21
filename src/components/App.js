import React from 'react';

import "./../style/App.css";

import Home from './Home';
import Recall from './Recall';


export default function App() {

const [start, setStart] = React.useState(false);

  if(!start) {
    return (
      <div className='app'>
        <Home setStart={setStart} />
      </div>
    );
  } else {
    return (
      <div className='app'>
        <Recall />
      </div>
    );
  }
}