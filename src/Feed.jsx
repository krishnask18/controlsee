import React, { useEffect, useState } from "react";
import App from "./App";

function Feed(){
    const [lst, setlst] = useState('asdf')
    async function fetchdata(){
        const usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/feed', {
            method : 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
        usr = await usr.json()
        setlst("done")
        console.log(usr);
    }
    // window.onload=()=>{
    //     console.log("feed here");
    //     fetchdata()
    // }
    // useEffect(()=>{
    //     console.log("feed here");
    //     fetchdata()
    // }, [])
    return(
        <div>
            {lst}
         </div>
    )
}

export default Feed;