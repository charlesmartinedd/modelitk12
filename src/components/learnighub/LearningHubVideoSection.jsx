import React from "react";
import { pageData } from "../../services/PageData";
import "./LearningHubVideoSection.css";

export default function LearningHubVideoSection() {
	const [hubData] = React.useState(pageData.hub[1]);

	return <React.Fragment>
		<section className="learninghub-video">
			<div className="container">
					<div className="video">
						<iframe src={hubData.videos[0].content} title="Transforming Life Sciences Learning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
					</div>
					<div className="video-content">
						<h2 className="learning-hub-title color-font-blue-0015">{hubData.title}</h2>
						<p className="learning-hub-content color-font-gray-0015">{hubData.content}</p>
					</div>
			</div>
		</section>
	</React.Fragment>
}