import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import { auth } from './Firebase';
import Homescreen from './Homescreen';
import ProfileScreen from './ProfileScreen'
import Login from './Login'
import {useDispatch, useSelector} from 'react-redux'
import { login , logout, selectuser } from './features/userSlice';


function App() {
  const user=useSelector(selectuser);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubcribe = auth.onAuthStateChanged((User)=>{
      if(User) {
        dispatch(login({
           uid:User.uid,
           email:User.email
        }))
      }
      else{
         dispatch(logout());
      }
    });
    return unsubcribe;
  },[dispatch])

  return (
    <div className="App">
      <Router>
        {!user ? (<Login />) : (
          <Routes>
            <Route path='/profile' element={ <ProfileScreen/> }></Route>
            <Route path="/" element={ <Homescreen/> }></Route> 
          </Routes>)
        }
        
      </Router> 
    </div>
  );
}

export default App;
