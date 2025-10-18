import React from "react";
import ContactSection from "../components/ContactSection";
import "./Page404.css";

export default function Page404() {
	return <React.Fragment>
		<section className="page404 color-bg-blue-0050">
			<div className="container">
				<div className="icon-box">
					<span className="fa-icon"><i class="fa-regular fa-face-sad-tear"></i></span>
				</div>
				<h2>404 Page Not Found</h2>
				<h5>Sorry! We couldn't find what you were looking for.</h5>
			</div>
		</section>
		<ContactSection />
</React.Fragment>
}