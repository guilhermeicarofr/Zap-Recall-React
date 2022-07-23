//import assets
import './style.css';

export default function ResultBar({recalls, recallIcon}) {






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
}