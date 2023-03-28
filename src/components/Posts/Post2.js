import React from 'react'

export default function Post2(props) {
  return (
    <div className="card pt-4 p-4" style={props.post}>
    <img className="card-img-top " src='rdr2.jpg'  alt=''/>
    <div className="card-body">
    <div className="card-text"><h4><strong>Red Dead Redemption 2 - The Best Game Ever</strong></h4></div>
      <p>The best game with the most detailed world ever crafted, along with the best-written story - Red Dead Redemption 2</p>
      <div className="date"> Mar 13, 2023</div>
    </div>
  </div>
  )
}
