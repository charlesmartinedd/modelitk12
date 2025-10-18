import React from "react";
import ImageCellModels from "./../../assets/icon-cell-models-white.png";
import { pageData } from "../../services/PageData";
import "./PricingTopSection.css";
import PricingPlans from "./PricingPlans";

export default function PricingTopSection() {
	const [data] = React.useState(pageData.pricing);

	return <React.Fragment>
		<section className="pricing-top bg-techcells-01">
			<div className="container">
				<PricingPlans />
			</div>
		</section>
		<section className="pricing-top color-bg-blue-0005">
			<div className="container">
				<div className="figure-box">
					<div className="figure animate-slidedown-icon">
						<img alt="Cell models" src={ImageCellModels}/>
					</div>
					<div className="figure-content">
						<p className="color-font-blue-0030">{data[0].content}</p>
					</div>
				</div>
			</div>
		</section>
	</React.Fragment>
}