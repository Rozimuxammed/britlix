import Button from "../../button/Button"
import "../card-speaking/CardSpeaking.css"
export default function CardSpeaking() {
    return (
        <div className="speaking">
            <img src="./src/assets/speaking.jpg" alt="" />
            <h2 className="poppins-semibold">Speaking</h2>
            <p className="poppins-regular">Improve your English skills and confidence.
                Live classes and interactive lessons online.
                20% extra free for a limited time only
            </p>
            <p className="poppins-regular">Learn English online and improve your
                skills through our high-quality courses
                and resources – all designed for adult language learners.
            </p>
            <Button />
        </div>
    )
}
