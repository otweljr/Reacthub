import React from 'react'

import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Publish from './components/Publish'
import Article from './components/Article'
import Newsdetail from './components/Newsdetail'

function App() {
  return (
  <> 
    <Routes>
      <Route exact path="/home" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/article" element={<Article/>}/>
      <Route exact path="/publish" element={<Publish />}/>
      <Route exact path="/:id" element={<Newsdetail/>} />
    </Routes>
      

  </>

  )
}

export default App