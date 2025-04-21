import "../self-study/SelfStudy.css"
export default function SelfStudy() {
  return (
    <div className="selfStudy">
      <img src="./src/assets/self-study.jpg" alt="" />
      <h2 className="poppins-semibold">Self-study online course</h2>
      <p className="poppins-regular">Start learning English online in live classes
        with qualified EC teachers and students
        from all over the world.
      </p>
      <button className="poppins-regular"> £5.99
        <sup>per month</sup></button>
    </div>
  )
}
