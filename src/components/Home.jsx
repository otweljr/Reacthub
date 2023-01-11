import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Homepage from './Homepage'
import LatestNews from './LatestNews'

function Home() {
  return (
    <div>
      <Header />
      <Homepage/>
      <LatestNews />
      <Footer />
    </div>
  )
}

export default Home