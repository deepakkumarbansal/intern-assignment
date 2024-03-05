import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import CustomRoute from './routes/CustomRoute'

function App() {
  const [userList, setUserList] = useState([
    {email:"deepakkumarbansal222@gmail.com", forgetPin: 111, password: "deepak123"},
    {email:"amit@gmail.com", forgetPin: 111, password: "amit123"},
    {email:"sumit@gmail.com", forgetPin: 111, password: "sumit123"},
    {email:"ayush@gmail.com", forgetPin: 111, password: "ayush123"},
    {email:"gaurav@gmail.com", forgetPin: 111, password: "gaurav123"},
  ])

  return (
    <div className='bg-black text-white w-full min-h-screen'>
      <CustomRoute userList={userList}/>
    </div>
  )
}

export default App
