import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rehh9ot', 'template_k32hyuk', form.current, 'user_Ht2OpjaH11GYVqzeUTs6d')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Participant Name </label>
      <input type="text" name="user_name"  /> 
      <br></br>
      <label>Participant Email </label>
      <input type="email" name="user_email"  />
      <br></br>
      <label>Response </label>
      <textarea name="message" value="Yes, I DO want my data included in this study " />
      <input type="submit" value="Send"  />
    </form>
  );
};

export default ContactUs;























/*

export default class extends React.Component {
  constructor(props) {
	super(props);
	this.state = { feedback: 'YES, I DO or NO, I DO NOT want my data to be included in this study.\n \n Participant Name:\n Date: ', name: 'Debriefing', email: 'wpalafox@gmail.com' };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
	return (
  	<form className="test-mailing">
    	<h1>Let's see if it works</h1>
    	<div>
      	<textarea
        	id="test-mailing"
        	name="test-mailing"
        	onChange={this.handleChange}
        	placeholder=" "
        	required
        	value={this.state.feedback}
        	style={{width: '100%', height: '150px'}}
      	/>
    	</div>
    	<input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit} />
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_k32hyuk';

	this.sendFeedback(templateId, {from_name: this.state.name, message_html: this.state.feedback, reply_to: this.state.email})
  }
  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'service_rehh9ot', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }


 
}

  

*/
  
