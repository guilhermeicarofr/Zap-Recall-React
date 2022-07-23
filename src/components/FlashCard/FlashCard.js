import React from 'react';

import './style.css';
import arrowicon from './../../assets/images/arrow.png';
import zapicon from './../../assets/images/zapicon.png';
import correcticon from './../../assets/images/correcticon.png';
import incorrecticon from './../../assets/images/incorrecticon.png';

export default function FlashCard({number, question, answer}) {

    function clickRecall(answer) {
        setProgress(4);
        setRecall(answer);
    }
    function recallIcon() {
        if(recall==='zap') {
            return zapicon;
        } else if(recall==='correct') {
            return correcticon;
        } else if(recall==='incorrect') {
            return incorrecticon;
        }
    }

    const [progress, setProgress] = React.useState(1);
    const [recall, setRecall] = React.useState('');

    switch(progress) {
        case 1:
            return (
                <div onClick={()=>setProgress(2)} className='card'>
                    <h2>Pergunta {number} <ion-icon name='play-outline'></ion-icon></h2>
                </div>
            );
        case 2:
            return (
                <div className='card question'>
                    <p>{question}</p>
                    <img onClick={()=>setProgress(3)} src={arrowicon} alt=''/>
                </div>
            );
        case 3:
            return (
                <div className='card answer'>
                    <p>{answer}</p>
                    <div className='buttons'>
                        <button onClick={()=>clickRecall('incorrect')}>Não lembrei</button>
                        <button onClick={()=>clickRecall('correct')}>Quase não lembrei</button>
                        <button onClick={()=>clickRecall('zap')}>Zap!</button>
                    </div>
                </div>
            );
        case 4:
            return (
                <div className='card'>
                    <h2 className={recall}>Pergunta {number} <img src={recallIcon()} alt=''/></h2>
                </div>
            );
        default:
            break;
    }
}