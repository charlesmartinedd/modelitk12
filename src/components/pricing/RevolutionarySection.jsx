import React from "react";
import { pageData } from "../../services/PageData";
import "./RevolutionarySection.css";

export default function RevolutionarySection() {
	const [data] = React.useState(pageData.platform);

	return <React.Fragment>
		<section className="revolutionary color-bg-blue-0015">
			<div className="container">
				<div className="figure-content">
					<h2 className="color-font-blue-0050">{data[0].title}</h2>
					<h4 className="color-font-blue-0050">{data[0].content}</h4>
				</div>
			</div>
		</section>
	</React.Fragment>
}