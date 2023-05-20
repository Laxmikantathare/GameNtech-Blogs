import React from 'react'

export default function Post4(props) {
  return (
    <div className="card pt-4 p-4 " style={props.post}>
    <img className="card-img-top " src='post3/htm.png'  alt=''/>
    <div className="card-body">
    <div className="card-text"><h4><strong>11 Underrated HTML Attributes that you Should Know</strong></h4></div>
      <p>In this article, we will discuss about 11 less-known HTML attributes like hidden, details, readonly, ...</p>
      <div className="date"> Mar 17, 2023</div>
    </div>
  </div>
  )
}
