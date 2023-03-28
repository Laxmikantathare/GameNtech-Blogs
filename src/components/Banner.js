import React from 'react'
import '../components/Style.css'

export default function Banner() {
  return (
    <div className="container-fluid banner" >
        <div className='text-center'>
       
      <img src='gameco.jpg'  className='rounded-circle ' alt="" width="140" height="140"/>
   
            <div className='mt-1'><strong><h1>Game<span className='Nhead'>N</span>tech</h1></strong></div>
            <div className='mt-2 spin'><h5><span className='blogsabo'>Blogs about </span><span id="spin"></span></h5></div>
        </div>
    </div>
  )
}
