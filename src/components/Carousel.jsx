import React from "react";
import "./Carousel.css";

export default function Carousel({data}) {
	return <div>
			<div className="carousel">
				<div className="carousel-skip left">
						<i class="fa-solid fa-chevron-left"></i>
				</div>
				<div class="carousel-container">				
					<div class="carousel-slide">
							{data.map((val) => 
								<div className="frame" key={val.id}>
									<h3>{val.title}</h3>
									<span>{val.subtitle}</span>
									<p>{val.content}</p>
								</div>
							)}
					</div>				
				</div>
				<div className="carousel-skip right">
					<i class="fa-solid fa-chevron-right"></i>
				</div>
			</div>
			<div className="carousel-controls">
				{data.map(val => <i key={val.id} class="fa-regular fa-circle"></i>)}
			</div>
		</div>
}