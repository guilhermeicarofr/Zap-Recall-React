import './style.css';

export default function ResultBar({recalls, recallIcon}) {






    return (
        <div className='result-bar'>
           {recalls.map((recall) => <img src={recallIcon(recall)} alt='' />)}
        </div>
    );
}