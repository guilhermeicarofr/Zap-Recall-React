import React from 'react';

import './style.css';
import arrow from './../../assets/images/arrow.png';

export default function FlashCard({number, question, answer}) {
    
    const [progress, setProgress] = React.useState(1);
        
    switch(progress) {

        case 1:
            return (
                <div onClick={()=>setProgress(2)} className='card'>
                    <h2>Pergunta {number} <ion-icon name='play-outline'></ion-icon></h2>
                </div>
            );

        case 2:
            return (
                <div onClick={()=>setProgress(3)} className='card question'>
                    <p>{question}</p>
                    <img src={arrow} alt=''/>
                </div>
            );

        case 3:
            return (
                <div className='card answer'>
                    <p>{answer}</p>
                    <div className='buttons'>
                        <button>Não lembrei</button>
                        <button>Quase não lembrei</button>
                        <button>Zap!</button>
                    </div>
                </div>
            );

        default:
            break;
    }

}