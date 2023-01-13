import React, { useState } from 'react'
import botIconImage from "../assets/Boticon.gif"
import "./Chatbot.css" 



function Chatbot() {

    const [isOpen,setIsOpen]=useState(false);

    const openChtbot =()=>{
        // 
        setIsOpen(true)
    }
    const closeChtbot =()=>{
        // 
        setIsOpen(false)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

  return (
    
    <div className="chatbot-container">
    <img className="chatbot-img" title='Press Me!' onClick={openChtbot} src={botIconImage} alt="bot icon image" />
    {/* <button onClick={openChtbot}>Open</button> */}

{
    isOpen && (
        <form className="chatbot-form" onSubmit={handleSubmit} >
            <button onClick={closeChtbot}>x</button>
            <input type="name" placeholder="Enter your Name here" />
            <input type="email" placeholder="Enter Your Email here" />
            <input type="text" placeholder="Subject ...."/>
            <textarea name="Type Your Massage here" id="" cols="30" rows="10"></textarea>
            <button>Submit</button>

    </form>
    )
}
  

    </div>
  )
}

export default Chatbot