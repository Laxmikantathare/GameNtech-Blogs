import React from 'react'

export default function Post3(props) {
  return (
    <div className="card pt-4 p-4" style={props.post}>
    <img className="card-img-top " src='javascript.png'  alt=''/>
    <div className="card-body">
    <div className="card-text"><h4><strong>A Complete Guide for JavaScript Beginners</strong></h4></div>
      <p>The complete beginner's guide for beginner coders of javascript for web development</p>
      <div className="date"> Mar 13, 2023</div>
    </div>
  </div>
  )
}
