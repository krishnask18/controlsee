import React, { useEffect, useState } from "react";
import App from "./App";

function Feed(){
    const [lst, setlst] = useState('')
    async function fetchdata(){
        const usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/feed', {
            method : 'GET',
            credentials : 'include',
            mode : 'cors',
        })
        usr = await usr.json()
        setlst(usr['data'][0])
        console.log(usr);
    }
    window.onload=()=>{
        console.log("feed here");
        fetchdata()
    }
    // useEffect(()=>{
    //     console.log("feed here");
    //     fetchdata()
    // }, [])
    return(
        <div>
            Feed
            {lst}
         </div>
    )
}

export default Feed;