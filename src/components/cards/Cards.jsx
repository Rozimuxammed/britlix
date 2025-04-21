import "../cards/Cards.css"
import CardListening from "./card-listening/CardListening"
import CardReading from "./card-reading/CardReading"
import CardSpeaking from "./card-speaking/CardSpeaking"
import CardWriting from "./card-writing/CardWriting"
export default function Cards() {
    return (
        <div className='cards'>
            <CardSpeaking />
            <CardWriting />
            <CardReading />
            <CardListening />
        </div>
    )
}
