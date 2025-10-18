import React from "react";
import { pageData } from "../../services/PageData";
import "./TeamSection.css";
import ImageFigureTeam from "./../../assets/figure-team-hands.png";

export default function TeamSection() {
	const [data] = React.useState(pageData.team);

	return <React.Fragment>
		<section className="team">
			<div className="container">
				<h2 className="title color-font-blue-0015">{data[0].title}</h2>
				<div className="figure-box">
					<div className="figure animate-slidedown-icon">
						<img alt="team hands" src={ImageFigureTeam}/>
					</div>
					<div className="figure-content">
						<h4 className="color-font-gray-0015">{data[0].content}</h4>
					</div>
				</div>
			</div>
		</section>
	</React.Fragment>
}