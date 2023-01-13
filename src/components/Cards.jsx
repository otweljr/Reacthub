import React from 'react'
// import breakingNews from "../assets/breaking news.png"
import "./Cards.css"
import { database } from './Data.jsx'
import {Link} from "react-router-dom"
// console.log(database);

function Cards() {
  return (
    <>
{
    database.map((data)=>(
      <div className="cards">
      <img className="card_img" src={data.image} at=""/>
      <p>{data.text2.substring(0,100)}... <Link to={`/${data.id}`}>Read More </Link> </p>
    </div>
    ))
   }
    </>
   
  )
}

export default Cards