import React, { useEffect, useState } from "react";
import App from "./App";

function Feed(){
    const [lst, setlst] = useState('asdf')
    async function loadata(){
        var usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/feed', {
            method : 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
        usr = await usr.json()
        var mapped = usr.data.map((qsn, index)=>{
            <div>
                {qsn['title']}
            </div>
        })
        setlst(
            <div
            style={{
                background:"red"
            }}>
                {
                    mapped
                }
            </div>
        )
        usr.data.map((q, i)=>{console.log(q['title']);})
    }
    // window.onload=()=>{
    //     console.log("feed here");
    //     loadata()
    // }
    useEffect(()=>{
        console.log("feed here");
        loadata()
    }, [])
    return(
        <div>
            {lst}
         </div>
    )
}

export default Feed;