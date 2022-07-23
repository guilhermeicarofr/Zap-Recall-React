//import modules
import React from 'react';

//import Components
import Home from './Home/Home';
import Recall from './Recall/Recall';

//import assets
import './../assets/style/reset.css';
import './../assets/style/style.css';

export default function App() {

  //state variable to screen change start and restart zaprecall
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
        <Recall setStart={setStart} />
      </div>
    );
  }
}