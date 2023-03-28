import React,{useEffect} from 'react'
import '../postpage/postpg.css'
export default function Postpg3(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container-fluid"style={props.postpg}>
    <div className="container pt-4 pb-4 px-4"style={props.postpgbd}>
     <h3 className='text-center mb-3'><strong>A guide for Javascript Beginners</strong></h3>

    <p>JavaScript forms the foundation of almost everything you see on the web. So, it being the base of thousands of popular frameworks, it’s a good language to learn!</p>
    <p>This is the ultimate beginner cheatsheet for Javascript. It’s a collection of useful snippets and tips to help you get started with Javascript.</p>

    <h5><strong> Data types</strong></h5>
    <p><strong> 1. Numbers</strong><p>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">var </span> x <span className="token operator">=</span><span className="token number"> 420</span>
    </code>
    </pre></p></p>
   
    <p><strong> 2. Variables</strong><p>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">var </span> age
    </code>
    </pre></p></p>

    <p><strong> 3. Text string</strong><p>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">var </span> name <span className="token operator">=</span><span className="token number"> "Hacker" </span>
    </code>
    </pre></p></p>
    <p><strong> 4. Operations</strong><p>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">var </span> sum <span className="token operator">=</span><span className="token number"> 3 </span>+<span className="token number"> 7 </span> 
    </code>
    </pre></p></p>
    <p><strong> 5. Boolean (True/False)</strong><p>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">var </span> x <span className="token operator">=</span><span className="token number"> True </span> 
    </code>
    </pre></p></p>

    <p><strong> 6. constant values</strong><p>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">const</span> x <span className="token operator">=</span><span className="token number"> 420</span>
    </code>
    </pre>
    </p>
    </p> 
    
    <h5><strong> Storing Data</strong></h5>
    <p><strong>1. <mark>Var </mark></strong><p> This is the most common way to store data. vars can be reassigned but can only be accessed inside a function. Variables defined with var move to top when code is executed.</p></p>
    <p><strong>2. <mark>Const </mark></strong><p>const values cannot be reassigned and are not accessible before they appear within the code.</p></p>
    <p><strong> 3. <mark>Let </mark></strong><p> let is similar to const but let variable can be re-assigned but not re-declared.</p></p>

    <h5><strong>Operators</strong></h5>
    <h6><strong> 1. Logical Operators </strong></h6>
    <p><mark>&&</mark> : Logical and</p>
    <p><mark>||</mark> : Logical or</p>
    <p><mark>!</mark> : Logical not</p>

    <h6><strong> 2. Arithmetic Operators </strong></h6>
    <p><mark>+</mark> : Addition</p>
    <p><mark>-</mark> : subtraction</p>
    <p><mark>*</mark> : multiplication</p>
    <p><mark>/</mark> : division</p>
    <p><mark>%</mark> : Remainder</p>
    <p><mark>++</mark> : Increment</p>
    <p><mark>--</mark> : Decrement</p>

    <h6><strong> 3. Comparision Operators </strong></h6>
    <p><mark>=</mark> : Equal to</p>
    <p><mark>==</mark> : Equal value</p>
    <p><mark>!=</mark> : Not Equal to</p>
    <p><mark>!==</mark> : Not Equal value</p>
    <p><mark>?</mark> : ternary opretor</p>
 
    <h6><strong> 4️. Bitwise Operators </strong></h6>
    <p><mark>&</mark> : AND</p>
    <p><mark>|</mark> : OR</p>
    <p><mark>~</mark> : NOT</p>
    <p><mark>^</mark> : XOR</p>

    <h5><strong>Array Functions</strong></h5>
    <pre className=" javascript" tabindex="0">
      <code className="javascript">
        <span className="token keyword">var </span> x <span className="token operator">= [</span><span className="token number"> "Apples", "Oranges" </span>]
    </code>
    </pre>
    <p>1.<mark>concat()</mark>: Join several arrays into one</p>
    <p>2.<mark>indexof()</mark>: Returns the first position at which a given element appears in an array</p>
    <p>3.<mark>join()</mark>: Combine elements of an array into a single string and return the string</p>
    <p>4.<mark>pop()</mark>: Removes the last element of an array</p>
    <p>5.<mark>push()</mark>: Add a new element at the end</p>
    <p>6.<mark>reverse()</mark>: This method reverses the order of the array elements.</p>
    <p>7.<mark>toString()</mark>: Converts the array elements to a string.</p>
    <p>7.<mark>sort()</mark>: Sorts the array elements in a specified manner.</p>

    <h5><strong>Dates</strong></h5>
    <p>Date object is used to get the year, month and day. It has methods to get and set day, month, year, hour, minute, and seconds.</p>

    <pre className=" javascript" tabindex="0">
      <code className="javascript">
       <span className="token keyword">getDate() </span > =  Returns the date from the date object<br></br>
       <span className="token keyword">getDay() </span > =   Returns the day from the date object<br></br>
        <span className="token keyword">getHours() </span > =  Returns the hours from the date object<br></br>
        <span className="token keyword">getMinutes() </span > =  Returns the minutes from the date object<br></br>
        <span className="token keyword">getSeconds() </span > =  Returns the seconds from the date object<br></br>
        <span className="token keyword">getTime() </span > =  Returns the time from the date object<br></br>
        
        </code> 
    </pre>
    <h6 className='text-center'><strong>Thank you for reading &#128515;</strong></h6>
 
    </div>
    </div>
  )
}
