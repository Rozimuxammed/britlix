import Button from "../../button/Button"
import "../card-listening/CardListening.css"
export default function CardListening() {
    return (
        <div className="listening">
            <div>
                <h2 className="poppins-semibold">Listening</h2>
                <p className="poppins-regular">Here you can find activities to practise
                    your listening skills. Listening will help you
                    to improve your understanding
                </p>
                <Button />
            </div>
            <img src="./src/assets/listening.jpg" alt="" />
        </div>
    )
}
