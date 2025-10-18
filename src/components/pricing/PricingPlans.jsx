import React from "react";
import { pricingData } from "../../services/PricingData";
import "./PricingPlans.css";

export default function PricingPlans() {
	const [data] = React.useState( pricingData );

	return <React.Fragment>
		<h2 className="title color-font-blue-0015">{data.title}</h2>
		<div className="plans-container">
			{data.plans.map( plan => <div className="plan" key={plan.id}>
				<h3>{plan.title}</h3>
				<ul>
					{plan.list.map(planBenefit => <li key={planBenefit.id}>
						{planBenefit.icon && (<span className="fa-icon"><i className={planBenefit.icon}></i></span>)}{planBenefit.title}
					</li>)}
				</ul>
				<div className="btn-purchase-container"><button>{plan.linkContent}</button></div>
			</div>)}
		</div>
	</React.Fragment>
}