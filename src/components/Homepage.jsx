import React from 'react'
import pic from "../assets/pexels-brotin-biswas-518543.jpg"

function Homepage() {
  return (
    <>
    <div className="homepage">
    <div className="breaking_news">
      <img src={pic} alt="breakingnews" />
      <h1>Stay tune for more news</h1>
    </div>
    </div>
    </>

  )
}

export default Homepage