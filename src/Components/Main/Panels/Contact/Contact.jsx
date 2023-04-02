import React from "react";

// Contact and send
export default function ContactUs() {
    return (
    <div className="ContactUs" id="ContactUs">
      <h4>Contact Us</h4>
      <form method="post">
        <label for="firstname">First name: </label>
        <input type="text" title="firstname" placeholder="Enter first name." required/>
        <br/>
        <label for="lastname">Last name: </label>        
        <input type="text" title="lastname" placeholder="Enter last name" required/>
        <br/>
        <label for="email">Email: </label>
        <input type="email" title="email" placeholder="Enter email" required/>
        <br/>
        <input type="checkbox" name="newsletter" checked/>
        <textarea rows="5" cols="40" placeholder="Enter your message to the team here" required/>
        <br/>
        <button type="submit">Send</button><br/>
   
        </form>
    </div>
    )
}