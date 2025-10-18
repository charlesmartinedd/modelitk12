import React from "react";
import PricingTopSection from "../components/pricing/PricingTopSection";
import RevolutionarySection from "../components/pricing/RevolutionarySection";
import TeamSection from "../components/pricing/TeamSection";

export default function PagePricing() {
	return <React.Fragment>
			<PricingTopSection/>
			<TeamSection/>
			<RevolutionarySection/>
	</React.Fragment>
}
