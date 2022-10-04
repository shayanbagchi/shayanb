import React from 'react';
import emailjs from '@emailjs/browser';
import './contact.styles.css'

class Contact extends React.Component {

	handleSubmit(e){
		e.preventDefault();
		emailjs.sendForm(
			'service_blpt6db', 
			'template_cnbdwhd', 
			e.target, 
			'4qwkWPgBkZa8t_WJh'
			)
			.then((response)=>{
				alert("Message Sent."); 
				this.resetForm();
			})
			.catch(err => console.log(err));
	}

    resetForm(){
	    this.setState({
	    	name: '', 
	    	email: '',
	    	subject:'', 
	    	message: ''
	    })
    }

	render() {
		return (
			<section id="contact" className="s-contact">
			    <div className="overlay"></div>
			    <div className="contact__line"></div>
			    <div className="row section-header">
			        <div className="col-full">
			            <h3 className="subhead">Contact</h3>
			            <h1 className="display-2 display-2--light">Reach out for a new project or just <br/> say hello</h1>
			        </div>
			    </div>
			    <div className="row contact-content">
			        <div className="contact-primary">
			            <h3 className="h6">Send A Message</h3>
			            <form name="contactForm" id="contactForm" onSubmit={this.handleSubmit} method="POST">
		                    <div className="form-field"> 
		                    	<input name="contactName" type="text" id="contactName" placeholder="Your Name" className="full-width" required />
		                    </div>
		                    <div className="form-field">
		                    	<input name="contactEmail" type="email" id="contactEmail" placeholder="Your Email" className="full-width" required/>
		                    </div>
		                    <div className="form-field">
		                    	<textarea name="contactMessage" id="contactMessage" placeholder="Your Message" rows="10" cols="50" className="full-width" required></textarea>
		                    </div>
		                    <div className="form-field"> 
		                    	<button type="submit" className="full-width btn--primary">Submit</button>
		                    </div>
			            </form>
			            <div className="message-warning"> Something went wrong. Please try again.</div>
			            <div className="message-success"> Your message was sent, thank you!<br/></div>
			        </div>
			        <div className="contact-secondary">
			            <div className="contact-info">
			                <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
			                <div className="cinfo">
			                    <h5>My Home</h5>
			                    <p> 267, Zone No - 6 <br/> Birsanagar, Jamshedpur <br/> India <br/> 831019</p>
			                </div>
			                <div className="cinfo">
			                    <h5>Email Me At</h5>
			                    <p> <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="3b5854554f5a584f7b5c5752554f48524f5e15585456">bagchishayan.9@gmail.com</a><br/></p>
			                </div>
			                <div className="cinfo">
			                    <h5>Call Me At</h5>
			                    <p> Mobile: (+91) 821 000 6547 </p>
			                </div>
			                <ul className="contact-social">
			                    <li> <a href="https://www.linkedin.com/in/shayan-bagchi-787a6715a/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
			                    <li> <a href="https://github.com/shayanbagchi"><i className="fa fa-github" aria-hidden="true"></i></a></li>
			                    <li> <a href="https://www.facebook.com/shayan.bagchi/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
			                    <li> <a href="https://www.instagram.com/shayan_bagchi/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
			                </ul>
			            </div>
			        </div>
			    </div>
			</section>
		);
	}
}

export default Contact;