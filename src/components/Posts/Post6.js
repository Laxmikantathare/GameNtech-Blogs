import React from 'react'

export default function Post6(props) {
  return (
    <div className="card  p-4"   style={props.post}>
    <img className="card-img-top " src='ml1.png'  alt=''/>
    <div className="card-body">
      <div className="card-text"><h4><strong>Top 8 Machine Learning Algorithms for ML Beginners</strong></h4></div>
      <p>Most commonly used machine learning algorithms along with their use cases and categories.</p>
      <div className="date"> Mar 18, 2023</div>
    </div>
  </div>
  )
}
