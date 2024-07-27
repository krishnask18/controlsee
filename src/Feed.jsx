import React, { useEffect, useState } from "react";
import App from "./App";

function Feed(){
    var divlist = <div className="innerlist">
    </div>
    const [lst, setlst] = useState(divlist)
    async function loadata(){
        var usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/feed', {
            method : 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
        })
        usr = await usr.json()
        divlist = <div className="innerlist">
            {usr.data.map((item) => (
        <div className="tile">{item['title']}</div>
        ))} 
        </div>
        setlst(
            <div 
            className="qlist"
            >
                {
                    divlist
                }
            </div>
        )
        usr.data.map((q, i)=>{console.log(q['title']);})
    }
    useEffect(()=>{
        loadata()
    }, [])
    return(
        lst
    )
}

export default Feed;