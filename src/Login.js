import React, { useState } from 'react'
import './Image.css'
import SignIn from './SignIn';

const Login = () => {
 
  const[signIn,setSignIn] = useState(false);
  
  const handleClick = () => {
      setSignIn(!signIn)
  }

  return (
    <>
       {signIn ? (<SignIn signIn={signIn}
                          setSignIn={setSignIn}
                          handleClick={handleClick}/>):(
        <div className='login_image'>
            <div className='flex flex-row justify-between '>
                <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className='w-[130px] mx-4 z-10'  />
                <button className='bg-red-700 text-white ' onClick={handleClick} >Sign In</button>
            </div>
            <div className='fade_away'></div>
            <div className='text-white w-screen h-[89vh] flex flex-col justify-center items-center z-20'>
                <h1 className='text-5xl pb-4 z-10'>Unlimited films, TV programmes and more.</h1>
                <div className='m-4 text-xl z-10 '>Watch anywhere , Cancel at any time.</div>
                <p className='mt-4 z-10'>Ready to watch? Enter your email to create or restart your membership</p>
                <div className='z-10'>
                    <input type="text" placeholder='Enter your email' className='rounded-none rounded-l-md'/>
                    <button className='bg-red-700 px-3 py-3 rounded-none rounded-r-md' onClick={handleClick}>Creat your account</button>
                </div>
                
            </div>
       </div>
     
       )}
    </>  
  )
}

export default Login
