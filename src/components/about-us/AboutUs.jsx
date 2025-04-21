import "../about-us/AboutUs.css"
export default function AboutUs() {
    return (
        <section className='container about-us'>
            <div className="title">
                <h2 className="poppins-semibold">About Us</h2>
                <p className="poppins-regular">The model offers a framework for discussing problems related to the user's experience, as well as possible ways and means of solving them. Application development begins at the top level (strategy), where the future software product is described quite abstractly from the point of view of the expectations of both users and the customer.
                </p>
                <div className="result">
                    <span>
                        <h3 className="poppins-semibold">800</h3>
                        <p className="poppins-regular">Pupils</p>
                    </span>
                    <span>
                        <h3 className="poppins-semibold">18</h3>
                        <p className="poppins-regular">Teachers</p>
                    </span>
                    <span>
                        <h3 className="poppins-semibold">6</h3>
                        <p className="poppins-regular">Foreign languages</p>
                    </span>
                </div>
            </div>
            <img src="./src/assets/about-us.jpg" alt="" />
        </section>
    )
}
