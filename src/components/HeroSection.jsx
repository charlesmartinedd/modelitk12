import React from "react";
import ImageCellModels from "./../assets/icon-cell-models-white.png";
import { pageData } from "../services/PageData";

export default function HeroSection() {
	const [data] = React.useState(pageData.hero);

	return <section className="top color-bg-blue-0015">
			<div className="container">
				<div className="figure animate-spin-30">
					<img alt="Cell models" src={ImageCellModels}/>
				</div>
				<div className="figure-content">
					<h3 className="color-font-blue-0050">{data[0].title}</h3>
					<p className="color-font-blue-0030">{data[0].content}</p>
				</div>
			</div>
	</section>
}