import React, {useState} from 'react'
import '../components/Style.css'

export default function Contant() {

  const [userdata, setuserdata] = useState({
    Name:"",
    Email:"",
    Message:"",
  })
  let name,value;
  const postuserdata = (event) =>{
    name = event.target.name;
    value=event.target.value;

  setuserdata({...userdata,[name]:value})
  }

  const submitdata =async(event)=>{
    event.preventDefault();
    const {Name, Email , Message}=userdata; 
    if( Name && Email && Message){

  const res=  fetch("https://myblogs-f380f-default-rtdb.firebaseio.com/userRecords.json",
  {
  method:"POST",
  Headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify({Name, Email , Message})
  } 
  )
  if(res){
    setuserdata({
      Name:"",
      Email:"",
      Message:"",
    })
    alert('Submitted Successfully')
  } else{
    alert('Please Fill the Data')
  }
}  else{
  alert('Please fill the information')
}
  }

  return (
    <>
  
    <div className="container-fluid  d-flex justify-content-center mt-2 mb-3">
    <div className="container p-4 m-5 conbox "style={{ maxWidth:"37rem"}}>
<form  autocomplete="off" className='text-center' method='POST'>
  <h4><strong>How Can I help?</strong></h4>

<div className="form-group">
    {/* <label for="Name">Name</label> */}
    <input type="text" className="form-control Name mt-4  shadow-sm bg-white rounded" id="Name" placeholder="Name" name='Name' value={userdata.Name} onChange={postuserdata}/>
  </div>

  <div className="form-group">
    {/* <label for="exampleFormControlInput1">Email address</label> */}
    <input type="email" className="form-control mt-4 mb-4 Email shadow-sm bg-white rounded" id="exampleFormControlInput1" name='Email' placeholder="Email" value={userdata.Email} onChange={postuserdata}/>
  </div>
 
  <div className="form-group">
    {/* <label for="exampleFormControlTextarea1">Example textarea</label> */}
    <textarea className="form-control Mess mt-4 mb-4  shadow-sm bg-white rounded" id="exampleFormControlTextarea1" placeholder='Message'name='Message' rows="3" value={userdata.Message} onChange={postuserdata}></textarea>
  </div>
  <button type="button" className="subbtn  p-2 px-4"onClick={submitdata}>Send</button>
</form>
</div>
</div>

    </>
  )
}
