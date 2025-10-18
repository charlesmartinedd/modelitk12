import React from "react";
import { pageData } from "../../services/PageData";
import "./RequestDemoTopSection.css";

export default function RequestDemoTopSection() {
	const [dataDemo] = React.useState(pageData.demo[0]);
	const [dataBenefits] = React.useState(pageData.demo[1]);

	return <React.Fragment>
		<section className="requestdemo-top ">
			<div className="bg-scale">
				<img src="./imgs/bg-library-01.png"/>
			</div>
			<div className="container">
				<h2 className="requestdemo-title">{dataDemo.title}</h2>
				<p className="requestdemo-content">{dataDemo.content}</p>
			</div>
		</section>
		<section className="requestdemo-top color-bg-blue-0050">
			<div className="container">
				<h2 className="requestdemo-title color-font-blue-0015">{dataBenefits.title}</h2>
				<div className="demo-benefits">
					<ul>
						{dataBenefits.list.map(benefit => <li key={benefit.id}>
							<i class="fa-solid fa-arrow-right-long"></i> {benefit.title}
						</li>)}
					</ul>
				</div>
			</div>
		</section>
	</React.Fragment>
}