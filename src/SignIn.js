import React, { useRef } from 'react'
import './Image.css';
import { auth } from './Firebase';

const SignIn = () => {
  
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register =  (e) =>{
     e.preventDefault();
     auth.createUserWithEmailAndPassword (
          emailRef.current.value,
          passwordRef.current.value
     ).then((authUser)=>{
        console.log(authUser)
     }).catch((error)=>{
          alert(error.message);
     })
  }

  const Signup = (e) => {
    e.preventDefault();
     
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=>{
      console.log(authUser)
   }).catch((error)=>{
        alert(error.message);
   })
  }
  return (
    <div className='login_image'>
            
            <div className='flex flex-col justify-center items-center h-full z-20'>
                <div className='flex flex-col justify-center items-center Homescreen text-white h-[50vh] w-[25vw]'>
                    <div className='w-[18vw]'>
                        <h1 className='text-3xl mb-4'>Sign In</h1>
                        <input ref={emailRef} type="text" placeholder='email' className='w-full'/>
                        <input ref={passwordRef} type="password" placeholder='password' className='w-full' />
                        <button className='bg-red-700 w-full mt-4 mb-8 mr-auto' onClick={Signup}>Sign In</button>
                        <div className='mr-auto text-gray-400 break-keep '>New to netflix?, <span className='hover:underline hover:cursor-pointer' onClick={register}>Sign Up now</span></div>  
                    </div>
                </div>    

            </div>
    </div>
  )
}

export default SignIn
