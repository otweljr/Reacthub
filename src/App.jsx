import React from 'react'

import Home from './components/Home'
import { Routes,Route } from 'react-router-dom'
import About from './components/About'
import Publish from './components/Publish'
import Article from './components/Article'

function App() {
  return (
  <>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/article" element={<Article/>}/>
      <Route exact path="/publish" element={<Publish />}/>
    </Routes>
      

  </>

  )
}

export default App