import React from 'react'

export default function Post5(props) {
  return (
     <div className="card pt-4 p-4" style={props.post}>
    <img className="card-img-top " src='./unsplash2.jpg'  alt=''/>
    <div className="card-body">
    <div className="card-text"><h4><strong>Things We Can Learn From Gaming 🎮</strong></h4></div>
      <p>While there are downsides to playing video games,but there are also things that we can learn things from Gaming.</p>
      <div className="date"> Mar 20, 2023</div>
    </div>
  </div>
  )
}
