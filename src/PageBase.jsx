import React from "react";
import Header from "./components/Header";
import FooterSection from "./components/FooterSection";

export default function PageBase({children, options}) {
	let _opts = {...options}
	
	if (!'header' in _opts) {
		_opts.header = false;
	}

	return <React.Fragment>
			{_opts.header === true ? <Header/> : null}
			<div className="page-container">
				{children}
				<FooterSection />
			</div>
	</React.Fragment>
}