
import React ,{useState} from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Contact from "./components/Contact"
import Error from "./Error"

import Body from "./components/Posts/Body";
import {Routes,BrowserRouter as Router,Route} from "react-router-dom";
import Postpg1 from "./postpage/Postpg1";
import Postpg2 from "./postpage/Postpg2";
import Postpg3 from "./postpage/Postpg3";
import Postpg4 from "./postpage/Postpg4";
import Postpg5 from "./postpage/Postpg5";
import Allpost from "./components/Allpost";
import Postpg6 from "./postpage/Postpg6";

function App() {
    
const [dark, setdark] = useState({
  color:'black'
  })
const [post, setpost] = useState({
    color:'black'
  })
const [postpg, setpostpg] = useState({
    backgroundColor:'white'
  })
const [postpgbd, setpostpgbd] = useState({
    color:'black'
  })
  const mode=()=>{
  if(dark.color==='black'){
    setdark(
   {backgroundColor:'black',color:'white'}
    )}
  else{
      setdark(
         {backgroundColor:'rgb(248 250 252)',color:'black'})
      }
  if(post.color==='black'){
      setpost(
        {backgroundColor:'rgb(22, 22, 31)',color:'white'}
         )}
  else{
      setpost(
        {backgroundColor:'rgb(248 250 252)',color:'black'})
          }
  if(postpg.backgroundColor==='white'){
      setpostpg(
        {backgroundColor:'black'}
      )}
  else{
      setpostpg(
        {backgroundColor:'white'})
         }
  if(postpgbd.color==='black'){
      setpostpgbd(
        {backgroundColor:'rgb(22, 22, 31)',color:'white'}
      )}
  else{
      setpostpgbd(
        {backgroundColor:'white',color:'black'})
         }
        }
  return (
<>    
  <Router>
        <Navbar  mode={mode} />
    <Routes>

       <Route exact path="/all_posts" element={ <Allpost postpg={postpg} postpgbd={postpgbd} post={post}/>}></Route>
 
       <Route exact path="/contact" element={ <Contact />}></Route>
       <Route exact path="*" element={ <Error />}></Route>

       <Route exact path="/Web_Deployment_Using_Flask" element={ <Postpg1 postpg={postpg} postpgbd={postpgbd}/>}></Route>
       <Route exact path="/Read_Dead_Redemption_2-Best_game_Ever" element={ <Postpg2 postpg={postpg} postpgbd={postpgbd}/>}></Route>
       <Route exact path="/Guide_for_Javascript_Beginners" element={ <Postpg3 postpg={postpg} postpgbd={postpgbd}/>}></Route>
       <Route exact path="/11_Underrated_HTML_Attributes..." element={ <Postpg4 postpg={postpg} postpgbd={postpgbd}/>}></Route>
       <Route exact path="/Things_We_Can_Learn_From_Gaming" element={ <Postpg5 postpg={postpg} postpgbd={postpgbd}/>}></Route>
       <Route exact path="/Top_8_Machine_Learning_Algorithm" element={ <Postpg6 postpg={postpg} postpgbd={postpgbd}/>}></Route>
       <Route exact path="/" element={<Body dark={dark} post={post} /> }></Route>
     </Routes>
        <Footer/>
  </Router>
    </>
  )
}
export default App;
