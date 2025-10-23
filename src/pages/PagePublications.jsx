import React from "react";
import "./PagePublications.css";

export default function PagePublications() {
	// Publications data ordered newest to oldest
	const publications = [
		{
			id: 1,
			title: "Discovering Signal Transduction by Building and Simulating a Bacterial Chemotaxis Model",
			link: "https://qubeshub.org/community/groups/coursesource/publications?id=5179&v=1",
			year: "2024",
			authors: "Helikar Lab",
			journal: "CourseSource",
			icon: "fa-solid fa-dna",
			description: "An interactive approach to teaching signal transduction through computational modeling of bacterial chemotaxis pathways."
		},
		{
			id: 2,
			title: "Teaching Advanced Concepts in Regulation of the Lac Operon With Modeling and Simulation",
			link: "https://qubeshub.org/community/groups/coursesource/publications?id=2792&v=1",
			year: "2023",
			authors: "Helikar Lab",
			journal: "CourseSource",
			icon: "fa-solid fa-microscope",
			description: "Advanced educational strategies for teaching lac operon regulation through interactive modeling and simulation techniques."
		},
		{
			id: 3,
			title: "Discovering Prokaryotic Gene Regulation by Building and Investigating a Computational Model of the lac Operon",
			link: "https://qubeshub.org/community/groups/coursesource/publications?id=2623&v=1",
			year: "2022",
			authors: "Helikar Lab",
			journal: "CourseSource",
			icon: "fa-solid fa-code-branch",
			description: "Hands-on computational modeling approach to understanding prokaryotic gene regulation mechanisms."
		},
		{
			id: 4,
			title: "Discovering Prokaryotic Gene Regulation with Simulations of the trp Operon",
			link: "https://qubeshub.org/community/groups/coursesource/publications?id=2609&v=1",
			year: "2022",
			authors: "Helikar Lab",
			journal: "CourseSource",
			icon: "fa-solid fa-flask",
			description: "Interactive simulations that reveal the complexities of the trp operon and prokaryotic gene regulation."
		},
		{
			id: 5,
			title: "Discovering Cellular Respiration with Computational Modeling and Simulations",
			link: "https://qubeshub.org/community/groups/coursesource/publications?id=2588&v=1",
			year: "2021",
			authors: "Helikar Lab",
			journal: "CourseSource",
			icon: "fa-solid fa-lungs",
			description: "Computational modeling approach to teaching cellular respiration through interactive simulations and analysis."
		}
	];

	const handlePublicationClick = (link) => {
		window.open(link, '_blank', 'noopener,noreferrer');
	};

	return <React.Fragment>
		{/* Hero Section */}
		<section className="publications-hero color-bg-blue-0015">
			<div className="container">
				<div className="publications-hero-content">
					<h1 className="color-font-blue-0050">
						Published Research & Educational Resources
					</h1>
					<p className="hero-tagline color-font-blue-0030">
						Peer-reviewed publications showcasing ModelIt's impact on K-12 science education through computational modeling and interactive simulations
					</p>
				</div>
			</div>
		</section>

		{/* Publications Grid Section */}
		<section className="publications-grid color-bg-blue-0050">
			<div className="container">
				<div className="publications-container">
					{publications.map((publication) => (
						<div key={publication.id} className="publication-card">
							<div className="publication-icon color-bg-blue-0020">
								<i className={publication.icon}></i>
							</div>
							<div className="publication-content">
								<h3 className="publication-title color-font-blue-0015">
									{publication.title}
								</h3>
								<div className="publication-meta">
									<span className="meta-item">
										<i className="fa-solid fa-calendar"></i>
										{publication.year}
									</span>
									<span className="meta-item">
										<i className="fa-solid fa-user"></i>
										{publication.authors}
									</span>
									<span className="meta-item">
										<i className="fa-solid fa-book"></i>
										{publication.journal}
									</span>
								</div>
								<p className="publication-description color-font-gray-0015">
									{publication.description}
								</p>
								<button
									className="publication-button color-bg-blue-0015"
									onClick={() => handlePublicationClick(publication.link)}
								>
									Read Publication
									<i className="fa-solid fa-arrow-right"></i>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	</React.Fragment>
}
