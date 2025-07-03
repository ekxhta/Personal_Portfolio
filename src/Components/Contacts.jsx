import React,{useState} from 'react'

import '../Styles/Contacts.css'

function Contacts() {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Don't reload the page
    e.preventDefault();

    // Allow the form to actually submit to FormSubmit
    e.target.submit();

    // Show the thank-you message
    setSubmitted(true);
  };

  return (
    <div>
     
        <br/>
        <div className="foot"> 
          {submitted ? (
          <div className="thank-you">
            <h2>Heyy! Thanks for the deets!</h2>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Will write back to you soon ✨</h3>
          </div>
            ) : (
          <>
            <h2>Let's <br/>Connect</h2>
            <form name="contact-form" onSubmit={handleSubmit} action="https://formsubmit.co/ekshta.mishra29@gmail.com" method="POST">

                <input type="hidden" name="_captcha" value="false" />

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="5" required></textarea>

                <div className="sub"> <button type="submit">Submit</button></div>
            </form>
            </>
            )}
        </div>
    </div>
  )
}

export default Contacts
