"use client"; // to run on client side we need to explicitly mention this
import Link from "next/link";
import React, {useEffect} from "react";
import { useRouter} from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = React.useState(false)
  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  useEffect(()=>{
          if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false)
          } else {
            setButtonDisabled(true)
          }
      },[user])

  const onSignUp = async () => {
    try {
        
    } catch (error) {
        
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-pink-300 text-black">
        <h1>{loading ? "Processing" : "Signup"}</h1>
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignUp}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">{buttonDisabled ? "No signup" : "Signup"}</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}
