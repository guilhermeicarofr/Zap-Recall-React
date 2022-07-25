//import assets
import './style.css';
import logo from './../../assets/images/logo.png';

export default function Home({setStart, zapgoal, setZapgoal}) {
    
    return (
        <div className='home'>
            <img src={logo} alt=''/>
            <h1>ZapRecall</h1>
            <input value={zapgoal} onChange={(event)=>setZapgoal(event.target.value)} placeholder='Digite sua meta de zaps...'></input>
            <button onClick={()=>setStart(true)}><h2>Iniciar Recall!</h2></button>
        </div>
    );
}