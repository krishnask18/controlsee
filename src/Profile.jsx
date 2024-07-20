import React, { useEffect, useState } from "react";

function Profile(){
    var usr = String(decodeURIComponent(window.location.href)).split('/')
    usr = usr[usr.length-1]
    const [info, setinfo] = useState("")
    async function fetchdata(){
        var data = await fetch('http://localhost:3000/userpage', {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method:'POST',
            body: JSON.stringify({"name":usr})
        })
        data = await data.json()
        if(data['name'] == undefined){
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