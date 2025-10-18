import React from "react";
import { Redirect } from "react-router-dom";
import "./PagePricingRedirect.css";

export default function PagePricingRedirect() {
	const [showBanner, setShowBanner] = React.useState(true);
	const [redirect, setRedirect] = React.useState(false);

	React.useEffect(() => {
		setShowBanner(true);
		const timer = setTimeout(() => {
			setRedirect(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	if (redirect) {
		return (
			<>
				{showBanner && (
					<div className="pricing-banner">
						<div className="pricing-banner-content">
							<i className="fa fa-info-circle"></i>
							<span>Pricing information coming soon - stay tuned!</span>
							<button onClick={() => setShowBanner(false)} aria-label="Close banner">
								<i className="fa fa-times"></i>
							</button>
						</div>
					</div>
				)}
				<Redirect to="/" />
			</>
		);
	}

	return null;
}
