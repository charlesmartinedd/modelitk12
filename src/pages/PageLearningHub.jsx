import React from "react";
import LearningHubTopSection from "../components/learnighub/LearningHubTopSection";
import LearningHubVideoSection from "../components/learnighub/LearningHubVideoSection";

import "./PageLearningHub.css";
import LearningHubInvestSection from "../components/learnighub/LearningHubInvestSection";
import LearningHubPowerSection from "../components/learnighub/LearningHubPowerSection";
import LearningHubExpandSection from "../components/learnighub/LearningHubExpandSection";

export default function PageLearningHub() {
	return <React.Fragment>
			<LearningHubTopSection/>
			<LearningHubVideoSection />
			<LearningHubPowerSection />
			<LearningHubExpandSection />
			<LearningHubInvestSection />
	</React.Fragment>
}
