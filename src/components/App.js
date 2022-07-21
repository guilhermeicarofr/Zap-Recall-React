import React from 'react';
import "./../style/App.css";

import Home from './Home';


export default function App() {

const [start, setStart] = React.useState(false);


  if(!start) {
    return (
      <Home setStart={setStart} />
    );
  } else {
    return (
      "tela 02"
    );
  }





}