import React from "react";
import "./RequestDemoFormSection.css";
import { pageData } from "../../services/PageData";


export default function RequestDemoFormSection() {

	const [formData, setFormData] = React.useState({ firstName: '', lastName: '', email: '', school: '', role: '', message: '' });
	const [showSuccess, setShowSuccess] = React.useState(false);

	const handleInputChange = (field, e) => {
		setFormData({ ...formData, [field]: e.target.value });
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		const subject = `Demo Request from ${formData.firstName} ${formData.lastName}`;
		const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nSchool: ${formData.school}\nRole: ${formData.role}\n\nMessage:\n${formData.message}`;
		window.location.href = `mailto:info@discoverycollective.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

		setShowSuccess(true);
		setFormData({ firstName: '', lastName: '', email: '', school: '', role: '', message: '' });

		setTimeout(() => {
			setShowSuccess(false);
		}, 5000);
	}

	return <section className="requestdemo-form">
			<div className="container">
				<h2 className="title color-font-blue-0015">Get Ready to Explore! Request a Demo below</h2>
				<div className="form-container">
					{showSuccess && (
						<div className="success-message">
							<i className="fa fa-check-circle"></i>
							<span>Thank you for your demo request! Your email client will open to send your request to info@discoverycollective.com.</span>
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
							<input type="text" placeholder="School" value={formData.school} onChange={handleInputChange.bind(this, 'school')} required/>
						</div>
						<div className="form-control shadow">
							<input type="text" placeholder="Role" value={formData.role} onChange={handleInputChange.bind(this, 'role')} required/>
						</div>
						<div className="form-control shadow">
							<textarea placeholder="Message" value={formData.message} onChange={handleInputChange.bind(this, 'message')} required></textarea>
						</div>
						<div className="form-control save">
							<button type="submit">Submit Request</button>
						</div>
					</form>
				</div>
			</div>
	</section>
}