import React, { useEffect, useState } from "react";
import { Button, colors, TextField } from "@mui/material";
import CodeEditor from '@uiw/react-textarea-code-editor';
import Select from 'react-select';
import Cookies from 'universal-cookie';
import { CgKey } from "react-icons/cg";
import { json } from "react-router-dom";

const cookies = new Cookies();

function Ask(){
    useEffect(()=>{
        setTitle(cookies.get('title') || "")
        setDescription(cookies.get('desc') || "")
        setCode(cookies.get('code') || "")
    }, [])
    const options = [
        { value: ['react', 'jsx'], label: 'jsx' },
        { value: ['cpp', 'c++'], label: 'cpp' },
        { value: ['c'], label: 'c' },
        { value: ['java'], label: 'java' },
        { value: ['javascript', 'js'], label: 'js' },
        { value: ['python', 'py'], label: 'py' },
        { value: ['flutter', 'dart'], label: 'dart' },
        { value: ['html'], label: 'html' },
        { value: ['css'], label: 'css' },
        { value: ['php'], label: 'php' },
        { value: ['sql'], label: 'sql' },
    ]
    const colourStyles = {
    control: (styles) => ({
        ...styles,
        // background: "rgba(215, 255, 235, 0.15)",
    }),
    option: (styles) => {
        return {
        ...styles,
        backgroundColor: "#233731",
        color: '#FFF',
        cursor:'pointer'
        // ...
        };
    },
    // ...
    };
    const defaultOption = options[0];
    const [lang, setlang] = useState('jsx')
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Code, setCode] = useState("");
    async function post(){
        var data = {
            "lang":lang,
            "title":Title,
            "desc":Description,
            "code":Code
        }
        var usr = await fetch('https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/profile', {
            method : 'GET',
            credentials : 'include',
            mode : 'cors',
        })
        usr = await usr.json() 
        const email = usr['email']
        if(email) {
            data['email'] = email
            var resp = await fetch("https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app/ques", {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method:'POST',
                // mode:'no-cors',
                body: JSON.stringify(data)
            })
            cookies.remove('title')
            cookies.remove('desc')
            cookies.remove('code')
        } else {
            window.location.href = 'https://csbackend-git-main-krishnas-projects-e88a8c5b.vercel.app?rqst='+encodeURIComponent(window.location.href) // window.location.href
        }
        window.location.href = window.location.href
    }
    
    return(
        <div
        className="askpage"
        >
            <div
            className="asktitle">
                <div
                className="qtitle"
                style= {{ color: "#b6fdd1" , font:"Montserrat", fontSize:"22.5px"}}
                >
                    Title
                </div>
            <TextField 
                className="askfield"
                value={Title}
                inputProps={{ style: { color: "white" , font:"Montserrat", fontSize:"22.5px"}}}
                onChange={(e)=>{
                    setTitle(e.target.value);
                    cookies.set('title', e.target.value);
                }}
                />
            </div>
            <div
            className="dtitle">
                <div
                className="desc"
                style= {{ color: "#b6fdd1" , font:"Montserrat", fontSize:"22.5px"}}
                >
                    Description
                </div>
            <textarea 
                className="dfield"
                rows={10}
                value={Description}
                onChange={(e)=>{
                    setDescription(e.target.value);
                    cookies.set('desc', e.target.value);
                }}
                style= {{ color: "white" , font:"Montserrat", fontSize:"18.5px"}}
                />
            </div>
            <div
            className="ctitle">
                <div
                className="code"
                style= {{ color: "#b6fdd1" , font:"Montserrat", fontSize:"22.5px"}}
                >
                    Code Snippet
                </div>
            <CodeEditor 
                className="codeeditor"
                language={lang}
                value={Code}
                style= {{ color: "white" , font:"Consolas", fontSize:"18.5px", height:"190px", overflowY:'scroll'}}
                onChange={(e)=>{
                    setCode(e.target.value);
                    cookies.set('code', e.target.value);
                }}
                />
            </div>
            <Select
                className="select"
                defaultValue={defaultOption}
                styles={colourStyles}
                options={options}
                onChange={(event)=>{
                    setlang(event.label);
                }}
            />
            <Button
            style={{
                position:"relative",
                transform:"translate(630px, 370px)",
                background : "#233731",
                color:"#8cb89b",
                borderRadius:"7px",
                fontSize:"19px"
            }}
            disabled={(Title.length==0 || Description.length==0)}
            onClick={post}
            >
                post
            </Button>
        </div>
    )
}

export default Ask;