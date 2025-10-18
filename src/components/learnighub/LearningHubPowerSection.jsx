import React from "react";
import { pageData } from "../../services/PageData";
import "./LearningHubPowerSection.css";

export default function LearningHubPowerSection() {
	const [hubData] = React.useState(pageData.hub[2]);

	return <React.Fragment>
		<section className="learninghub-power bg-globetools-01">
			<div className="container">
				<div className="figure-content">
					<h2 className="learning-hub-title">{hubData.title}</h2>
					<p className="learning-hub-content">{hubData.content}</p>
				</div>
			</div>
		</section>
	</React.Fragment>
}