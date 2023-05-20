import React from 'react'

export default function Post3(props) {
  return (
    <div className="card pt-4 p-4" style={props.post}>
    <img className="card-img-top " src='javascript.png'  alt=''/>
    <div className="card-body">
    <div className="card-text"><h4><strong>A Complete Guide for JavaScript Beginners</strong></h4></div>
      <p>The complete beginner's guide for beginner coders of javascript which includes datatypes, operators, functions, etc.</p>
      <div className="date"> Mar 15, 2023</div>
    </div>
  </div>
  )
}
