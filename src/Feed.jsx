import React, { useEffect, useState } from "react";
import App from "./App";

function Feed(){
    var divlist = <div className="qlist">
        <div
        className="innerlist">

        </div>
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
        const dta = [
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
            // 'asdf',
        ]
        divlist = <div className="innerlist">
            {usr.data.map((item, index) => (
        <div className="tile" 
        // style={{height:"30px", background:"yellow"}}
        >
            <div className="intile">
                {item['title']}
            </div>
        </div>
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