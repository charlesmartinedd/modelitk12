import React from "react";
import { pageData } from "../../services/PageData";
import "./LearningHubExpandSection.css";

export default function LearningHubExpandSection() {
	const [hubData] = React.useState(pageData.hub[3]);

	return <React.Fragment>
		<section className="learninghub-expand">
			<div className="container">
					<div className="figure-box">
						<div className="figure animate-slidedown-icon">
							<img alt="Webinar" src="./imgs/figure-webinar-1.png"/>
						</div>

						<div className="figure-content">
							<h2 className="learning-hub-title color-font-blue-0015">{hubData.title}</h2>
							<p className="learning-hub-content color-font-gray-0015">{hubData.content}</p>
						</div>
					</div>					
			</div>
		</section>
	</React.Fragment>
}