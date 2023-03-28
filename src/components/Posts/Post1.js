import React from 'react'
import './Post.css'
export default function Post1(props) {
  return (
 
    <div className="card pt-4 p-4"   style={props.post}>
    <img className="card-img-top " src='post1img.png'  alt=''/>
    <div className="card-body">
      <div className="card-text"><h4><strong>Web Deployment Using Flask Framework</strong></h4></div>
      <p>In this article, we will go through Deployment of Machine learing model by using Pickle Library in flask framework</p>
      <div className="date"> Mar 11, 2023</div>
    </div>
  </div>

  )
}
