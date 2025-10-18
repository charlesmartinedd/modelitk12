import React from "react";
import { pageData } from "../../services/PageData";
import "./TPTCallToActionSection.css";

export default function TPTCallToActionSection() {
	const [data] = React.useState(pageData.teachersPayTeachers.cta);

	const handleVisitStore = () => {
		window.open('https://www.teacherspayteachers.com/store/modelit', '_blank');
	}

	return <section className="tpt-cta color-bg-blue-0015">
		<div className="container">
			<div className="tpt-cta-content">
				<h2 className="tpt-cta-title color-font-blue-0050">{data.title}</h2>
				<p className="tpt-cta-description color-font-blue-0030">{data.content}</p>
				<div className="tpt-cta-button-container">
					<button onClick={handleVisitStore} className="tpt-cta-button">
						Visit Our Store on TpT
					</button>
				</div>
			</div>
		</div>
	</section>
}
