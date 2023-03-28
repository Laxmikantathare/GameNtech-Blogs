import React from 'react'

import Post1 from "./Posts/Post1";
import Post2 from "./Posts/Post2";
import Post3 from "./Posts/Post3";
import Post4 from "./Posts/Post4";
import Post5 from "./Posts/Post5";
import Post6 from "./Posts/Post6";

import './Posts/Post.css'

import {Link} from "react-router-dom";



export default function Allpost(props) {
  return (
    
    <div className="container-fluid allpostbg" style={props.postpgbd}>
      <h3 className="text-center pt-2 pb-2"><strong>All Posts </strong> </h3>
    <div className=' container  postbg  pb-3 pt-3 px-5'style={props.postpg}>  
    <div className="row text-center">    
    <div className=" col mt-4 mb-3  bd-highlight"><Link className="link"to="/postpg1"><Post1 post={props.post} /></Link></div>
    <div className="col mt-4 mb-3  bd-highlight"><Link className="link"to="/postpg2"><Post2 post={props.post}/></Link></div>
      </div>
    <div className="row text-center">  
    <div className="col mt-4 mb-4 bd-highlight"><Link className="link"to="/postpg3"><Post3 post={props.post}/></Link></div>
    <div className="col mt-4 mb-4 bd-highlight"><Link className="link"to="/postpg4"><Post4 post={props.post}/></Link></div>
    </div>

    <div className="row text-center">  
    <div className="col mt-4 mb-4 bd-highlight"><Link className="link"to="/postpg3"><Post6 post={props.post}/></Link></div>
    <div className="col mt-4 mb-4 bd-highlight"><Link className="link"to="/postpg4"><Post5 post={props.post}/></Link></div>
    </div>

    </div>
    </div>
  )
}
