import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Feed from './Feed'
import Profile from './Profile'
import { AppBar } from '@mui/material'
import { Button } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from 'react';
import Menubar from './Menubar'
import Ask from './Ask'


function App() {
  var [User, setUser] = useState({name:""})
  const loginButton = 
  <Button 
  className='loginb'
    style={{
      backgroundColor:'#203540',
      color:'white',
      fontFamily:'Montserrat',
      boxShadow:"2px 2px 7px #000"
    }}
    startIcon = {<FcGoogle/>}
    onClick={()=>{
          window.location.href = 'https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app?rqst='+encodeURIComponent(window.location.href) // window.location.href
        }
      }
  >Sign in</Button>
  const usrname = function(name){
    return(
      <div
      className='circle'
      onClick={()=>{
        window.location.href = '/profile/'+name
      }}
      >
         <p className='btntxt'>
         {name[0]}
         </p>
      </div>
    )
  }
  async function fetchdata(){
    const usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/profile', {
      method : 'GET',
      credentials : 'include',
      mode : 'cors',
    })
    // console.log("usrdata before: ");
    // console.log(usr);
    const ax = await usr.json()
    // console.log("usrdata : ");
    // console.log(ax);
    if(ax == {}){
      setUser({})
    }
    else {
      setUser(ax)
    }
  } 
  useEffect(()=>{
    fetchdata()
  }, [])
  return (
    <BrowserRouter>
      <AppBar
      className='appbar'
        style={{
          // backgroundColor:'#303030',
          fontSize:40,
          height: 65
        }}
      >
        <p
        style={{
          margin:'0px -60px 0px 0px',
          fontFamily:"Montserrat",
          color:"#1a9660",
          textAlign:'left',
          textShadow:"1px 1px 3px black"
          }}>
        controlSEE
        </p>
        {User['name'] == undefined ? loginButton : usrname(User['name'])}
        <hr 
        className='line'/>
      </AppBar>
        <div
        className='vl'>
        </div>
        <Menubar/>
      <Routes>
        <Route 
          path='/feed/'
          element={<Feed/>}
        />
        <Route 
          path='/profile/:username'
          element={<Profile/>}
        />
        <Route 
          path='/ask'
          element={<Ask/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App;