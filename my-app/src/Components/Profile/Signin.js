import React from 'react'
import Gmail from "../../images/gmail.png";

const Signin = ({ signIn}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
            <h3 className="text-white text-base">Please Signin to upload songs</h3>
           <button onClick={signIn} className="bg-gray-500 rounded-xl p-1 m-3 w-1/3"> <img
              src={Gmail}
              alt="google logo png google icon logo png transparent svg vector bie supply"
              className="w-3 h-3 inline-block mx-auto mb-1"
            /></button>
          </div>
  )
}

export default Signin