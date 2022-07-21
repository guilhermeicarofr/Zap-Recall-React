import "./../style/FlashCard.css"

export default function FlashCard({number, question, answer}) {
    return (
        <div className="card">
            <h2>Pergunta {number} <ion-icon name="play-outline"></ion-icon></h2>
        </div>
    );
}