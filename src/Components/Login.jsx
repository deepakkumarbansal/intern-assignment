import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
const Login = ({userList, setLoginStatus}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [invalidCredentials, setInvalidCredentials] = useState(false);
    const navigate = useNavigate();
    function submitHandler(e){
        e.preventDefault();
        let userDetails = userList.find((user)=>user.email == email && user.password == password);
        if(userDetails){
            setLoginStatus(true)
            navigate('/home')
        }
        else{
            setInvalidCredentials(true)
            setTimeout(()=>{
                setInvalidCredentials(false)
            }, 4000)
        }
        setEmail("");
        setPassword("");
    }
  return (
    <div className='h-full w-full flex justify-center items-center flex-col'>
    <div className='w-full h-[200px] flex justify-center items-center'>
      <img src='../../src/assets/images/Group 3@2x.png' alt="img" className='w-20 h-20'/>
    </div>
    <p className='text-[#36A546] mb-12'>We are Electric</p>
      {
        invalidCredentials && <p className='text-red-600 text-start w-1/2 mb-3'>Invalid login credentials</p>
      }
      <form onSubmit={submitHandler} className='w-3/4'>
        <input type="email" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} className='bg-[#1F191966] text-[#FFFFFF] px-4 py-2 rounded-full w-full shadow-inner shadow-[#FFFDFD40] focus:shadow-none outline-none focus:outline-blue-600' autoFocus required/>
        <br />
        <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-[#1F191966] text-[#FFFFFF] px-4 py-2 rounded-full w-full shadow-inner shadow-[#FFFDFD40] my-9 focus:shadow-none focus:outline-none focus:outline-blue-600' required/>
        <br />
        <button type='submit' className='bg-[#00FF2580] text-[#FFFFFF8C] border-[#8CFF0026] w-full rounded-full px-4 py-2 shadow-inner shadow-black active:bg-[#2b793680]'>Login</button>
      </form>
      <Link to="/" className='text-[#36A546] mt-5'>Forgot Password?</Link>
    </div>
  )
}

export default Login
