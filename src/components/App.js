import React from 'react';

import './../assets/style/reset.css';
import './../assets/style/style.css';

import Home from './Home/Home';
import Recall from './Recall/Recall';

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