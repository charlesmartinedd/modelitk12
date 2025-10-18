import React from "react";

import "./PageRequestDemo.css";
import RequestDemoTopSection from "../components/requestdemo/RequestDemoTopSection";
import RequestDemoFormSection from "../components/requestdemo/RequestDemoFormSection";


export default function PageRequestDemo() {
	return <React.Fragment>
			<RequestDemoTopSection/>
			<RequestDemoFormSection />
	</React.Fragment>
}
