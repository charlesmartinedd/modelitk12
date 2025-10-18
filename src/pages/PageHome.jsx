import React from "react";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

import "./PageHome.css";


export default function PageHome() {
	return <React.Fragment>
			<HeroSection/>
			<FeaturesSection />
			<TestimonialsSection />
			<ContactSection />
	</React.Fragment>
}
