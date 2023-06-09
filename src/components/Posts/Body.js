import React from 'react'
import Post1 from "./Post1";
import Post2 from "./Post2";
import Post3 from "./Post3";
import Post4 from "./Post4";
import Post5 from "./Post5";
import './Post.css'
import Banner from '../Banner';
import {Link} from "react-router-dom";
import Post6 from './Post6';



export default function Body(props) {

return (
    <>    
    <Banner/>
  <div className=' container-fluid postbg pt-3 px-5'style={props.dark} >  
  <div className="row text-center">    
  <div className=" col mt-4 mb-3  bd-highlight"><Link className="link"to= "/Web_Deployment_Using_Flask" ><Post1 post={props.post} /></Link></div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight"><Link className="link"to="/Read_Dead_Redemption_2-Best_game_Ever"><Post2 post={props.post} /></Link></div>
  <div className="col mt-4 mb-3 m-1 bd-highlight"><Link className="link"to="/Guide_for_Javascript_Beginners"><Post3 post={props.post} /></Link></div>
  </div>
  <div className="row text-center pb-3">  
  <div className="col mt-4 mb-3 bd-highlight"><Link className="link"to="/11_Underrated_HTML_Attributes..."><Post4 post={props.post} /></Link></div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight"><Link className="link"to="/Top_8_Machine_Learning_Algorithm"><Post6 post={props.post} /></Link></div>
  <div className="col mt-4 mb-3 mx-1 bd-highlight"><Link className="link"to="/Things_We_Can_Learn_From_Gaming"><Post5 post={props.post} /></Link></div>
    </div>
  </div>
</>
  )
}
