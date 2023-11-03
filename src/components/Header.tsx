import { useState } from "react"
import { Link } from "react-router-dom"


const Header = () => {

  const [show, setShow] = useState<boolean>(false)

  const onChange = ()=>{
    if (window.scrollY >= 50){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  window.addEventListener("scroll", onChange)
  return (
    <div >
      <div>
      {
        show? (
        <div className="w-full h-[50px] justify-center items-center flex shadow-sm shadow-red-900  font-[700] text-[20px] fixed z-[100] bg-red-700 text-white duration-[350ms]">
        <div className="w-[90%] h-full flex justify-between items-center">
        <div className="text-[25px] italic">Pb</div>
      <div className="text-[20px] mobile:text-[15px]">Contacts</div>
        </div>
    </div>
    ) : (
      <div className="w-full h-[50px] justify-center items-center flex shadow-sm shadow-red-900 text-rose-700 font-[700] text-[20px]">
      <div className="w-[90%] h-full flex justify-between items-center">
      <div className="text-[25px] italic">Pb</div>
      
      <Link to="/">
      <div className="text-[20px] mobile:text-[15px]">Contacts</div>
      </Link>

      
      </div>
  </div>
    )
      }
      </div>
    </div>
  )
}

export default Header