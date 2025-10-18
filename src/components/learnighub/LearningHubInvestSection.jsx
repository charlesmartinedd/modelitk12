import React from "react";
import { pageData } from "../../services/PageData";
import "./LearningHubInvestSection.css";
import ButtonContact from "./ButtonContact";

export default function LearningHubInvestSection() {
	const [hubData] = React.useState(pageData.hub[3]);

	return <React.Fragment>
		<section className="learninghub-invest color-bg-blue-0015">
			<div className="container">
				<h2 className="learning-hub-title">{hubData.title}</h2>
				<p className="learning-hub-content">{hubData.content}</p>
				<ButtonContact/>
			</div>
		</section>
	</React.Fragment>
}