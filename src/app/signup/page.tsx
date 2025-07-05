"use client"
import { NextResponse } from "next/server";
import axios from "axios"
import { useRef } from "react";
export default function Signup(){
  const usernameRef=useRef<HTMLInputElement>(null);
  const passwordRef=useRef<HTMLInputElement>(null);
  function handleSignup(){
    const username=usernameRef.current?.value;
    const password=passwordRef.current?.value
    axios.post("http://localhost:3000/api/v1/signup",{
      username,
      password
    }).then(res=>{
      console.log("Signup successful",res.data)
    }).then(err=>{
      console.log("Signup error",err)
    })
  }
  
  return <div>
    <div className="">
      <input ref={usernameRef} type="text" placeholder="Username" className="border-1 rounded-md  "></input>
      <input ref={passwordRef} type="password" placeholder="Password" className="border-1 rounded-md"></input>
      <button onClick={handleSignup}>Signup</button>
    </div>
  </div>
}


