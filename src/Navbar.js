import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[show,setShow]=useState(false);

  const controlNavbar = () => {
      if(window.scrollY > 200) {
        setShow(true);
      }else{
        setShow(false);
      }
  }
  useEffect(()=>{
    window.addEventListener("scroll",controlNavbar);
    return(()=>{
      window.removeEventListener("scroll",controlNavbar);
    })
  },[])
  return (
    <div className={!show ?`fixed flex justify-between   w-full transition z-10`:`fixed bg-black flex justify-between   w-full transition z-10`}>
      
      <div className='flex flex-row'>
         <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" className='w-[130px] mx-4' />
          <ul className='flex flex-row text-white '>
            <li>Movies</li>
            <li>TV shows</li>
            <li>Anime</li>
            <li>Subscriptions</li>
          </ul>
      </div>
      <div>
      <Link to="/profile"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="" className='w-[50px] h-[50px] m-3'  /></Link> 
      </div>
    </div> 
  )
}

export default Navbar
