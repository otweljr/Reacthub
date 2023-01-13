import React from 'react'
import {database} from "./Data.jsx" 
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import "./Newsdetail.css"
import Header from './Header.jsx'
import Footer from "./Footer.jsx" 


function Newsdetail() {

    let {id} = useParams()
    const news=database.find(x=>x.id===id)
    console.log(news);
  return (
    <>
    <Header/>
    <div className="newsdetails">
        <div className="newsdetail_image">
            <img src={news.image} alt="" />
        </div>
        
        <p>{news.text1}</p>
        <p>{news.text2}</p>
        <Link to={"/"}><button>More Articles</button></Link>
        

    </div>
    <Footer />

    </>
  )
}

export default Newsdetail