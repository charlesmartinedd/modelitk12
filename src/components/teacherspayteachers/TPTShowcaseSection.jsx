import React from "react";
import { pageData } from "../../services/PageData";
import "./TPTShowcaseSection.css";

export default function TPTShowcaseSection() {
	const [data] = React.useState(pageData.teachersPayTeachers.showcase);

	return <section className="tpt-showcase color-bg-blue-0050">
		<div className="container">
			<div className="tpt-showcase-grid">
				{data.map((item) => (
					<div key={item.id} className="tpt-showcase-card">
						<div className="tpt-card-icon-container">
							<span className="tpt-card-icon">
								<i className={item.icon}></i>
							</span>
						</div>
						<h3 className="tpt-card-title color-font-blue-0015">{item.title}</h3>
						<p className="tpt-card-description color-font-gray-0015">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	</section>
}
