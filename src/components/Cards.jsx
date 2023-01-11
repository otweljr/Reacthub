import React from 'react'
import breakingNews from "../assets/breaking news.png"
import "./Cards.css"

function Cards() {
  return (
    <div className="cards">
      <img className="card_img" src={breakingNews} alt="breaing news" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque maiores quod consectetur delectus mollitia ea accusamus illum perspiciatis aliquam. <a href="">Read More</a> </p>
    </div>
  )
}

export default Cards