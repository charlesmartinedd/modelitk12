import React from "react";
import { pageData } from "../../services/PageData";
import "./LearningHubTopSection.css";
import ButtonContact from "./ButtonContact";

export default function LearningHubTopSection() {
	const [hubData] = React.useState(pageData.hub[0]);

	return <React.Fragment>
		<section className="learninghub-top bg-worktable-01">
			<div className="container">
				<h2 className="learning-hub-title">{hubData.title}</h2>
				<p className="learning-hub-content">{hubData.content}</p>
				<ButtonContact/>
			</div>
		</section>
	</React.Fragment>
}