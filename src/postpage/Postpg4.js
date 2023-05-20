import React,{useEffect} from 'react'
import '../postpage/postpg.css'
export default function Postpg4(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container-fluid"style={props.postpg}>
    <div className="container pt-4 pb-4 px-4" style={props.postpgbd}>
     <h3 className='text-center mb-3'><strong>11 Underrated HTML Attributes that you Should Know...</strong></h3>
      <p>HTML may not be a programming language, but there’s no doubt in the power it possesses. We often depend on external javascript libraries for some basic tasks, but need for some of them might end today.</p>
      <p>In this article we will discuss about 11 HTML attributes you probably did not know, but need to know for sure.</p>
      <p>Let’s get started!</p>
      
      <h5><strong>1. Autocomplete</strong></h5>
      <p>The <mark>autocomplete</mark> attributes specifies whether the browser is allowed to fill out the textarea or not. If turned on, it will assist users with autofilling options such as email, phone numbers, nationality, and so on.</p>
      <img className='jupyter mb-3'src="/post3/auto.png" alt="" />

      <h5><strong>2. Download</strong></h5>
      <p>The <mark>download</mark>  attribute on an anchor tag specifies that the file should be downloaded to the local storage when a user clicks on the hyperlink.</p>
      <img className='jupyter mb-3'src="/post3/download.png" alt="" />

      <h5><strong>3. Contenteditable</strong></h5>
      <p>The <mark>contenteditable</mark> attribute allows the user to edit the content of an element.</p>
      <img className='jupyter mb-3'src="/post3/conte.png" alt="" />

      <h5><strong>4. Accept</strong></h5>
      <p>The <mark>accept</mark> states which file types are allowed to be selected in the input. This attribute can only be used on an <mark>input tag </mark> with type="file". To allow all files of specific media type, use an asterisk beside its name. For example, accept="image/*".</p>
      <img className='jupyter mb-3'src="/post3/accept.png" alt="" />

      <h5><strong>5. Hidden</strong></h5>
      <p>The <mark>hidden</mark> attribute specifies whether or not the element is visible.</p>
      <img className='jupyter mb-3'src="/post3/hidden.png" alt="" />

      <h5><strong>6. Autoplay</strong></h5>
      <p>The <mark>autoplay</mark>attribute ensures that the audio/video will automatically start playing as soon as it is loaded</p>
      <img className='jupyter mb-3'src="/post3/autoplay.png" alt="" />

      <h5><strong>7. Inputmode</strong></h5>
      <p>The <mark>inputmode</mark>hints at the type of data that might be entered by the user while editing the element or It also helps the mobile browsers to display the keyboard in the appropriate mode.</p>
      <img className='jupyter mb-3'src="/post3/input.png" alt="" />

      <h5><strong>8. Abbreviation</strong></h5>
      <p>The <mark>abbreviation</mark> tag used to show the description of the abbreviation when you hover over the element.</p>
      <img className='jupyter mb-3'src="/post3/abbr.png" alt="" />

      <h5><strong>9. Details</strong></h5>
      <p>The <mark>details</mark> tag used to specify additional details on the web page in a disclosure widget that the user can view or hide when they want</p>
      <img className='jupyter mb-3'src="/post3/details.png" alt="" />

      <h5><strong>10. Spellcheck</strong></h5>
      <p>The <mark>spellcheck</mark>attribute defines whether the element is checked for spelling errors.</p>
      <img className='jupyter mb-3'src="/post3/content.png" alt="" />

      <h5><strong>11. Readonly</strong></h5>
      <p>The <mark>readonly</mark>attribute specifies that an input field is read-only and can’t be edited.</p>
      <img className='jupyter mb-3'src="/post3/read.png" alt="" />
      <h6 className='text-center'><strong>Thank you for reading &#128515;</strong></h6>
 
      

     </div>
     </div>
  )
}
