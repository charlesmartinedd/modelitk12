import React from "react";
import { pageData } from "../services/PageData";

export default function FeaturesSection() {
	const [data] = React.useState(pageData.features);
	const [lessons] = React.useState(pageData.lessons);
	return <React.Fragment>
		<section className="feature color-bg-blue-0050">
			<div className="container">
				{data.map((feature) => 
					<div key={feature.id} className="feature-row">
						<div className="figure animate-slidedown-icon">
							<img alt={`Picture${feature.title}`} src={`./imgs/${feature.picture}`}/>
						</div>
						<div className="figure-content">
							<h3 className="color-font-blue-0015">{feature.title}</h3>
							<p className="color-font-gray-0015">{feature.content}</p>
						</div>
					</div>
				)}
			</div>
		</section>
		<section className="feature">
			<div className="container">
					{lessons.map((lesson) => 
						<div key={lesson.id} className="feature-lesson">
							<div className="fa-icon">
								<i class="fas fa-chalkboard-teacher"></i>
							</div>
							<div className="feature-lesson-content">
								<h4 className="color-font-gray-0015">{lesson.content}</h4>
								<span className="color-font-blue-0020" href={lesson.link}>{lesson.linkContent}</span>
							</div>
						</div>
					)}
			</div>
		</section>
	</React.Fragment>
}