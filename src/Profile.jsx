import React, { useEffect, useState } from "react";

function Profile(){
    var usr = String(decodeURIComponent(window.location.href)).split('/')
    usr = usr[usr.length-1]
    const [info, setinfo] = useState("")
    async function fetchdata(){
        var data = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/userpage', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({"name":usr})
        })
        data = await data.json()
        if(data['name'] == undefined || data['name'] != usr){
        }
        else {
          setinfo(data['name'])
        }
      } 
    useEffect(()=>{
        fetchdata()
    }, [])
    return(
        <div>
            {info}
         </div>
    )
}

export default Profile;