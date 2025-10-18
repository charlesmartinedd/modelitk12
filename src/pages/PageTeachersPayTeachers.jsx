import React from "react";
import TPTHeroSection from "../components/teacherspayteachers/TPTHeroSection";
import TPTShowcaseSection from "../components/teacherspayteachers/TPTShowcaseSection";
import TPTCallToActionSection from "../components/teacherspayteachers/TPTCallToActionSection";
import "./PageTeachersPayTeachers.css";

export default function PageTeachersPayTeachers() {
	React.useEffect(() => {
		document.title = "Teachers Pay Teachers | ModelIt!";
	}, []);

	return <React.Fragment>
		<TPTHeroSection/>
		<TPTShowcaseSection />
		<TPTCallToActionSection />
	</React.Fragment>
}
