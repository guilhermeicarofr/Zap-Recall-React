import './../style/Home.css'
import logo from './../images/logo.png'

export default function Home({setStart}) {
    return (
        <div className='home'>
            <img src={logo} alt=''/>
            <h1>ZapRecall</h1>
            <button onClick={()=>setStart(true)}><h2>Iniciar Recall!</h2></button>
        </div>
    );
}