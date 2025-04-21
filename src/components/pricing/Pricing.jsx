import "../pricing/Pricing.css"
import Live from "./live-online/Live"
import Personal from "./personal-tuition/Personal"
import SelfStudy from "./self-study/SelfStudy"
export default function Pricing() {
    return (
        <section className='pricing container'>
            <h1 className='poppins-semibold'>Pricing</h1>
            <div className="pricing-cards">
                <SelfStudy />
                <Live />
                <Personal />
            </div>
        </section>
    )
}
