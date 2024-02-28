import React from 'react'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import NavBar from './components/NavBar'
import {Route,Routes} from "react-router-dom"
import Service from './components/Service'
import Contact from './components/Contact'
import PG from './components/PG'
import Hostel from './components/Hostel'
import Details from './components/Details'
import Reviews from './components/Reviews'
import Problem from './components/Problem'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScrollComponent from './components/SmoothScroll'
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className='overflow-x-hidden overflow-y-auto'>
      <SmoothScrollComponent/>
    <NavBar/>
    <Routes>

       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<AboutUs/>}></Route>
       <Route path='/service' element={<Service/>}></Route>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/pg' element={<PG/>}></Route>
       <Route path='/hostel' element={<Hostel/>}></Route>
       <Route path='/pg/:id' element={<Details/>}></Route>
       <Route path='/hostel/:id' element={<Details/>}></Route>
       <Route path='/reviews' element={<Reviews/>}></Route>
       <Route path='/service/problem' element={<Problem/>}></Route>
    </Routes>
    
    </div>
  )
}

export default App