import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { toast } from 'react-toastify';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_0rrub29', 'template_slgtyfs', form.current, 'LyTMhmQkdXMdcCdlu')
			.then((result) => {
				console.log(result.text);
				toast('message sent');
			}, (error) => {
				console.log(error.text);
			});

			form.value = ''
	};

	return (
		<div className="contact-container">
			<h1 className='text-center text-2xl mb-4 contact-title'> Contact Me </h1>
			<div className="contact-wrap  mx-auto lg:w-1/2 md:w-2/3 sm:w-3/4 lg:px-1.5rem md:px-1rem sm:px-0.3rem ">
				<form ref={form} onSubmit={sendEmail} className='px-20'>
					<label>Name</label>
					
					<input type="text" name="user_name" placeholder='Your Name' className="input w-full max-w-xs" />
		
					<label>Email</label>
		
					<input type="email" name="user_email" placeholder='Your Email' className="input w-full max-w-xs" required/>
		
					<label>Message</label>
					
					<textarea name="message" placeholder='Massage' cols='40' rows='5'
					 className='input w-full max-w-xs py-2' required
					/>
					<br />
					<input type="submit" value="Send" className=" contact-button text-white input w-1/2 max-w-xs" />
				</form>
			</div>
		</div>
	);
};
export default Contact;