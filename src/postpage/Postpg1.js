import React ,{useEffect}from 'react'
import '../postpage/postpg.css'

export default function Postpg1(props){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <> 
     <div className="container-fluid"style={props.postpg}>
    <div className="container pt-4 pb-4 px-4"style={props.postpgbd}>
     <h3 className='text-center mb-3'><strong>Web Deployment Using Flask</strong></h3>

    <p>Flask is a a web application framework written in python. flask provides us with tools, libraries and technologies that allow us to build a web application.</p>
    <p>In this blog I will give you a walkthrough on how to build a simple web application out of our ML Model and deploying it eventually.</p>
   
    <p> First, we will see a directory stucture. In this we are using Templates beacause using templates we are able to set a basic layout for pages and mention which element will change. <p>I have saved the project under a main directory called Flask1 & It consist of Templates folder, Static folder, main.py & Weight_pred.pkl is a pickle file created by using Jupyter notebook.</p>
    <p><strong>templates :-</strong> This folder contains the html files (index.html ) that would be used by our main file (main.py) to generate the front end of our application.
    <p><strong>main.py :-</strong> This is the main application file, where all our code resides and it binds everything together.</p></p>
    </p>
    <p>firstly let's talk about <mark>Jupyter file</mark></p>
    <img className='jupyter mb-3'src="jupyter.png" alt="" />
    <p>In this, I have imported libraries like pandas, Numpy, Pickle, Matplotlib.pyplot, LinearRegression(), train_test_split, etc.
    & By using train_test_split i have trained the model and fit by using Linear Regression.</p>
    <p>then by using Pickle Library, I have dumped the file in write mode. & then reload it by using load. </p>
    <p>Now we will talk about <mark>main.py</mark></p>
    <img className='jupyter mb-3'src="main.png" alt="" />
    <p> In This, I have imported libraries like flask, render template, request, pickle, etc. then i open the pickle file in variable name lo_model. then returning index.html template.</p>
    <p>next to it, i have define a function pred in which, by using post method i have request values from index .html in for loop. then converting it into array form it is shot in pickle file. and at last i created variable output in which the prediction is going to print.</p>
    <p>At last about <mark>index.html</mark> file</p>
    <img className='jupyter1 mb-3'src="index.png" alt="" />
    <p>Now, here in html file i have included form tag so that we can take action to '/pred'. then i have included a input and a submit button for form submission. and at last the varible output in which output will store. </p>
   <p><mark>Output Running on 'http://127.0.0.1:5000'/</mark></p>
    <video src="vid.mp4"  className='video mb-3'type="video/mp4" autoPlay muted/>
    <p>Now let us have a look at the final result, we are entering random value of height and gives predicted value of weight.</p>
    <p>Just like this we deployed our ML model by using Flask framework. &#128515;</p>

    </div>
    </div>
      </>
  )
}
