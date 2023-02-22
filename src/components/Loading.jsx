import React from 'react'
import "./loading.css"
import loading from "../assets/loading.svg"

function Loading() {
  return (
    <div className="loading">
        <img src={loading} alt="loading" />
        <h2>Loading...</h2>
    </div>
  )
}

export default Loading