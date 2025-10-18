import React from "react";
import { pageData } from "../services/PageData";
import Carousel from "./Carousel";

export default function TestimonialsSection() {
	const [data] = React.useState(pageData.testimonials);
	return (<section className="testimonial bg-lab-01">
			<div className="container">
				<Carousel data={data}/>
			</div>
	</section>)
}