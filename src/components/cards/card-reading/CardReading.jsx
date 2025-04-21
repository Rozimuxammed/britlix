import Button from "../../button/Button"
import "../card-reading/CardReading.css"
export default function CardReading() {
    return (
        <div className="reading">
            <img src="./src/assets/reading.jpg" alt="" />
            <h2 className="poppins-semibold">Reading</h2>
            <p className="poppins-regular">perception and response actions of the user
                resulting from the use and/or upcoming use
                of the product, system or service
            </p>
            <Button />
        </div>
    )
}
