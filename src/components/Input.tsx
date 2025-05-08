import './Input.css'
const Input = () => {
  return (
    <div className ="block justify-center text-center mt-10 relative">
        <input type="text" id="input" className="bg-[#202020] max-w-[40%] w-[350px] rounded h-[40px] text-lg p-2"></input>
        <div className="absolute right-[25px] top-0 text-center"><h3 className="">WPM</h3><h4>128</h4></div>
    </div>
  )
}

export default Input