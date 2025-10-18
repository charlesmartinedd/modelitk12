import React from "react";

export default function ButtonContact() {
	const handleContact = () => {
		window.location.href = 'mailto:team@modelitk12.com';
	}

	return <div className="learning-hub-btn-contact"><button type="button" onClick={handleContact}>Contact us</button></div>
}