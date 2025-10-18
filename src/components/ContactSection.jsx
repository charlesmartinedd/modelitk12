import React from "react";
import "./ContactSection.css";
import { pageData } from "../services/PageData";

export default function ContactSection() {

	const [socials] = React.useState(pageData.socials);
	const [contacts] = React.useState([]); //pageData.contacts);
	const [formData, setFormData] = React.useState({ firstName: '', lastName: '', email: '', message: '' });
	const [showSuccess, setShowSuccess] = React.useState(false);

	const handleOpenSocial = (link, e) => {
		e.preventDefault();
		location.href = link;
	}

	const handleInputChange = (field, e) => {
		setFormData({ ...formData, [field]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = `Contact Form Submission from ${formData.firstName} ${formData.lastName}`;
		const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
		window.location.href = `mailto:team@modelitk12.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		setShowSuccess(true);
		setFormData({ firstName: '', lastName: '', email: '', message: '' });

		setTimeout(() => {
			setShowSuccess(false);
		}, 5000);
	}

	return <section className="contact">
			<div className="container">
				<div className="contact-side">
						<div className="social">
							{socials.map((value) => 
								<span onClick={handleOpenSocial.bind(this, value.link)} className="fa-icon" key={value.id} title={value.title}>
									<i class={value.icon}></i>
								</span>
							)}							
						</div>
						<div className="address">
							<ul>
								{contacts.map((value) =>
									<li key={value.id}>
										<span className="fa-icon" title={value.title}>
											<i class={value.icon}></i>
										</span>
										<label>{value.content}</label>
									</li>							
								)}
							</ul>
						</div>
						<div className="contact-icon">
							{(function() {
								if (socials.length == 0 && contacts.length == 0) {
									return <React.Fragment>
										<span className="fa-icon"><i class="fa-solid fa-envelope-open-text"></i></span>
									</React.Fragment>
								}
								return null;
							})()}
						</div>						
				</div>
				<div className="contact-form">
					<h3 className="title color-font-blue-0015">Contact us</h3>
					<p className="subtitle">We value your curiosity and want to provide you with all the information you need.
						If you have any questions or need assistance, don't hesitate to reach out to us.
						Our dedicated team is ready to help and provide you with prompt and accurate answers.</p>
					{showSuccess && (
						<div className="success-message">
							<i className="fa fa-check-circle"></i>
							<span>Thank you for your message! Your email client will open to send your message to team@modelitk12.com.</span>
						</div>
					)}
					<form onSubmit={handleSubmit}>
						<div className="form-control shadow">
							<input type="text" placeholder="First name" value={formData.firstName} onChange={handleInputChange.bind(this, 'firstName')} required/>
						</div>
						<div className="form-control shadow">
							<input type="text" placeholder="Last name" value={formData.lastName} onChange={handleInputChange.bind(this, 'lastName')} required/>
						</div>
						<div className="form-control shadow">
							<input type="email" placeholder="Email" value={formData.email} onChange={handleInputChange.bind(this, 'email')} required/>
						</div>
						<div className="form-control shadow">
							<textarea placeholder="Message" value={formData.message} onChange={handleInputChange.bind(this, 'message')} required></textarea>
						</div>
						<div className="form-control save">
							<button type="submit">Send</button>
						</div>
					</form>
				</div>				
			</div>
	</section>
}