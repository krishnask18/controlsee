import React, { useEffect } from "react";
import App from "./App";

function Feed(){
    async function fetchdata(){
        const usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/feed', {
            method : 'GET',
            credentials : 'include',
            mode : 'cors',
        })
        usr = await usr.json()
        console.log(usr);
    }
    useEffect(()=>{
        console.log("feed here");
        fetchdata()
    }, [])
    return(
        <div>
            Feed
         </div>
    )
}

export default Feed;