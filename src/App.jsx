import React from 'react'

import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Publish from './components/Publish'
import Article from './components/Article'
import Newsdetail from './components/Newsdetail'
import Loading from './components/Loading'
import { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [load,setLoad]=useState(false)

  useEffect(()=>{
    setLoad(true)
    setTimeout(()=>{
      setLoad(false)
    },5000)
  },[])
  return (
  <> 
  {
    load ? <Loading/> :
     <div>
    {/* <Home /> */}
    <Routes>
      <Route exact path="/home" element={<Home/> }   />
      <Route  path="/about" element={<About />}/>
      <Route  path="/articles" element={<Article/>}/>
      <Route  path="/publish" element={<Publish />}/>
      <Route  path="/:id" element={<Newsdetail/>} />
    </Routes>
    </div>
  }
  </>
  )
}

export default App