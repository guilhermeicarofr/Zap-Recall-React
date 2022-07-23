//import modules
import React from 'react';

//import assets
import './style.css';
import happy from './../../assets/images/party.png';
import sad from './../../assets/images/sad.png';

export default function ResultBar({recalls, recallIcon, setStart}) {

    //state variable to check results bar progress to end zaprecall
    const [result, setResult] = React.useState('');

    //checks if result is ready and ok or not ok
    if(recalls.length === 8 && result === '') {
        if(recalls.filter((item)=>item==='incorrect').length === 0) {
            setResult('ok');
        } else {
            setResult('notok');
        }
    }

    //resultbar stages
    switch(result) {
        case '':
            return (
                <div className='result-bar'>
                    <div>
                        <h2>{recalls.length}/8 CONCLUÍDOS</h2>
                        <div>
                            {recalls.map((recall, index) => <img key={index} src={recallIcon(recall)} alt='' />)}
                        </div>
                    </div>
                </div>
            );
        case 'ok':
            return (
                <div className='result-bar finished'>
                    <div>
                        <h3><img src={happy} alt=''/> Parabéns!</h3>
                        <p>Você não esqueceu de nenhum flashcard!</p>
                        <h2>{recalls.length}/8 CONCLUÍDOS</h2>
                        <div>
                            {recalls.map((recall, index) => <img key={index} src={recallIcon(recall)} alt='' />)}
                        </div>
                        <button onClick={()=>setStart(false)}>REINICIAR RECALL</button>
                    </div>
                </div>
            );
        case 'notok':
            return (
                <div className='result-bar finished'>
                    <div>
                        <h3><img src={sad} alt=''/> Putz...</h3>
                        <p>Ainda faltam alguns... Mas não desanime!</p>
                        <h2>{recalls.length}/8 CONCLUÍDOS</h2>
                        <div>
                            {recalls.map((recall, index) => <img key={index} src={recallIcon(recall)} alt='' />)}
                        </div>
                        <button onClick={()=>setStart(false)}>REINICIAR RECALL</button>
                    </div>
                </div>
            );
        default:
            break;
    }
}