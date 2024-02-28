import React from 'react'
import NavBar from './NavBar'
import CentralContent from './CentralContent'
import NavFoot from './NavFoot'
function Home() {
  return (
    <div className='w-screen h-screen bg-blue-200 bg-left-top bg-cover  bg-[url("https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] '>
  
    <CentralContent/>
    <NavFoot/>
    </div>
  )
}

export default Home