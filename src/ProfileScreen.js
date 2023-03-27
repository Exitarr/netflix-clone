import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { selectuser } from './features/userSlice';
import {auth} from './Firebase'



const profileScreen = () => {
  const user = useSelector(selectuser);
  return (
    <div className='bg-black h-[100vh]'>
      <div className='flex flex-row justify-between '>
                <Link to="/"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className='w-[130px] mx-4 z-10'  /></Link>
                <Link to="/"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" className='w-[50px] h-[50px] m-3'  /></Link>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex  flex-col items-start'>
            <h1 className='text-white text-6xl '>Edit profile</h1>
            <div className='flex w-[40vw]'>
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" className='w-[90px] h-[90px] mt-2'  />
                <div className='m-2 w-[50vw] text-white'>
                    <p className='bg-gray-500 p-3  w-full'>{user.email}</p>
                    <h2 className='my-4 font-bold'>Plans {"("}Curren plan : premium{")"}</h2>
                    <h3 className='text-gray-400'>Renewal Date : 04/04/2023</h3>
                    <div className='m-4 space-y-10 text-gray-400'>
                        <div className='flex flex-row justify-between h-[30%]'>
                            <h3>Netflix standard (1080p)</h3>
                            <button className='bg-red-600 rounded-none m-0 py-2 px-6 '>subscribe</button>
                        </div>
                        <div className='flex flex-row justify-between h-[30%]'>
                            <h3>Netflix Basic (480p)</h3>
                            <button className='bg-red-600 rounded-none m-0 py-2 px-6'>subscribe</button>
                        </div>
                        <div className='flex flex-row justify-between h-[30%]'>
                            <h3>Netflix premium (4k+UHD)</h3>
                            <button className='bg-red-600 rounded-none m-0 py-2 px-6'>subscribe</button>
                        </div>
                    </div>
                    <button className='w-full bg-red-600 rounded-none' onClick={()=>auth.signOut()}>Sign out</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default profileScreen
