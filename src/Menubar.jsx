import { Button, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LuHome } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";
import { FaQuestion  } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Menubar(){
    const iconsize = "30px"
    const fontsize = "22.5px"
    const fontcolor = "#8cb89b"
    // const div_ = 
    // const [lgt, setlgt] = useState(false)
    // useEffect(()=>{
    //     console.log(cookies.get('PUERTOPONDICKMANNSON'));
    //     setlgt(
    //         cookies.get('PUERTOPONDICKMANNSON')!=undefined
    //     )
    // }, [])
    return (
        <div
            className="listparent"
        >
            <div
            className="list"
            >
                <div
                style={{
                    height:"50px"
                }}>
                    <Button
                        className="li" 
                        onClick={()=>{
                            window.location.href = '/'
                        }}
                        style={{
                            background : "#233731"
                        }}
                        startIcon={
                            <LuHome
                            style={{
                                fontSize:iconsize,
                                position:'relative',
                                color:fontcolor,
                            }}
                            />}>
                        <p
                        style={{
                            fontSize:fontsize,
                            position:'relative',
                            top:"1px",
                            color:fontcolor
                        }}>
                            Home
                        </p>
                    </Button>
                </div>
                <div
                style={{
                    height:"50px"
                }}>
                    <Button
                        className="li" 
                        onClick={async ()=>{
                            var usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/profile', {
                                method : 'GET',
                                credentials : 'include',
                                mode : 'cors',
                            })
                            usr = await usr.json()
                            const name = usr['name']
                            window.location.href = name ? '/profile/'+encodeURIComponent(name) : 'https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app?rqst='+encodeURIComponent("http://localhost:5173/feed")
                        }}
                        style={{
                            background : "#233731"
                        }}
                        startIcon={
                            <FaRegUser
                            style={{
                                fontSize:iconsize,
                                position:'relative',
                                color:fontcolor,
                            }}
                            />}>
                        <p
                        style={{
                            fontSize:fontsize,
                            position:'relative',
                            top:"1px",
                            color:fontcolor
                        }}>
                            profile 
                        </p>
                    </Button>
                </div>
                <div
                style={{
                    height:"50px"
                }}>
                    <Button
                        className="li" 
                        onClick={()=>{
                            window.location.href = '/ask'
                        }}
                        style={{
                            background : "#233731"
                        }}
                        startIcon={
                            <FaQuestion 
                            style={{
                                fontSize:iconsize,
                                position:'relative',
                                color:fontcolor,
                            }}
                            />}>
                        <p
                        style={{
                            fontSize:fontsize,
                            position:'relative',
                            top:"1px",
                            color:fontcolor
                        }}>
                            ask 
                        </p>
                    </Button>
                </div>
                <div
                style={{
                    height:"50px"
                }}>
                    <Button
                        className="li" 
                        onClick={()=>{
                            cookies.remove('PUERTOPONDICKMANNSON')
                            window.location.href = window.location.href
                        }}
                        style={{
                            background : "#233731"
                        }}
                        startIcon={
                            <RiLogoutBoxRLine 
                            style={{
                                fontSize:iconsize,
                                position:'relative',
                                color:fontcolor,
                            }}
                            />}>
                        <p
                        style={{
                            fontSize:fontsize,
                            position:'relative',
                            top:"1px",
                            color:fontcolor
                        }}>
                            logout 
                        </p>
                    </Button>
                </div> 
            </div>
        </div>
    )
}

export default Menubar;