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
  //state variable to get de input value of zap goals
  const [zapgoal, setZapgoal] = React.useState(1);

  if(!start) {
    return (
      <div className='app'>
        <Home setStart={setStart} zapgoal={zapgoal} setZapgoal={setZapgoal} />
      </div>
    );
  } else {
    return (
      <div className='app'>
        <Recall setStart={setStart} zapgoal={zapgoal} />
      </div>
    );
  }
}