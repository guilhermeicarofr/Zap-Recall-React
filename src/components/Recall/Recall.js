//import modules
import React from 'react';

//import Components
import FlashCard from './../FlashCard/FlashCard';
import ResultBar from './../ResultBar/ResultBar';

//import data
import decks from './../../data/decks.json'

//import assets
import './style.css';
import logo from './../../assets/images/logo-small.png'
import zapicon from './../../assets/images/zapicon.png';
import correcticon from './../../assets/images/correcticon.png';
import incorrecticon from './../../assets/images/incorrecticon.png';

export default function Recall() {
    
    //state array user answer recalls
    const [recalls, setRecalls] = React.useState([]);

    //adds recall to resultbar
    function addResultBar(userrecall) {
        setRecalls([...recalls, userrecall]);
    }
    //returns correct icon import
    function recallIcon(userrecall) {
        if(userrecall==='zap') {
            return zapicon;
        } else if(userrecall==='correct') {
            return correcticon;
        } else if(userrecall==='incorrect') {
            return incorrecticon;
        }
    }

    return (
        <div className='recall'>
            <h1><img src={logo} alt=''/> ZapRecall</h1>
            <div className='deck'>
                {decks.sort(()=>Math.random() - 0.5).map((q,index)=><FlashCard key={index} number={index+1} question={q.question} answer={q.answer} addResultBar={addResultBar} recallIcon={recallIcon} />)}
            </div>
            <ResultBar recalls={recalls} recallIcon={recallIcon} />
        </div>
    );
}