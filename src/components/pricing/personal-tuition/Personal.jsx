import "../personal-tuition/Personal.css"
export default function Personal() {
  return (
    <div className="personal">
      <img src="./src/assets/personal.jpg" alt="" />
      <h2 className="poppins-semibold">Live online classes</h2>
      <p className="poppins-regular">Interactive group classes with expert
        teachers. Free 7-day trial
      </p>
      <button className="poppins-regular">  £12.99
        <sup>per month</sup></button>
    </div>
  )
}
