import React from "react";
import { pageData } from "../../services/PageData";
import "./TPTHeroSection.css";

export default function TPTHeroSection() {
	const [data] = React.useState(pageData.teachersPayTeachers.hero);

	const handleVisitStore = () => {
		window.open('https://www.teacherspayteachers.com/store/modelit', '_blank');
	}

	return <section className="tpt-hero">
		<div className="container">
			<div className="tpt-hero-content">
				<h1 className="tpt-hero-title color-font-blue-0015">{data.title}</h1>
				<p className="tpt-hero-subtitle color-font-gray-0015">{data.subtitle}</p>
				<div className="tpt-hero-button-container">
					<button onClick={handleVisitStore} className="tpt-hero-button">
						Visit Our Store
					</button>
				</div>
			</div>
		</div>
	</section>
}
