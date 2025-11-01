import React from "react";
import "./PageLanding.css";

export default function PageLanding() {
	return <React.Fragment>
		{/* Hero Section */}
		<section className="landing-hero color-bg-blue-0015">
			<div className="container">
				<div className="landing-hero-content">
					<h1 className="color-font-blue-0050">
						The Future of Science Education is Here
					</h1>
					<p className="hero-tagline color-font-blue-0030">
						Empowering students to explore the wonders of life science through computational modeling and hands-on discovery
					</p>
				</div>
			</div>
		</section>

		{/* Development Status Card */}
		<section className="landing-status color-bg-blue-0050">
			<div className="container">
				<div className="status-card">
					<div className="status-icon">
						<i className="fas fa-rocket"></i>
					</div>
					<h2 className="color-font-blue-0015">Currently in Development</h2>
					<p className="color-font-gray-0015">
						We're building something extraordinary for K-12 science education.
						ModelIt K12 is being crafted with care to bring interactive computational
						modeling to every classroom. Stay tuned for an amazing learning experience!
					</p>
				</div>
			</div>
		</section>

		{/* Cell Collective CTA */}
		<section className="landing-cell-collective">
			<div className="container">
				<div className="cta-card">
					<div className="cta-content">
						<h2 className="color-font-blue-0015">
							Experience the Platform Behind the Magic
						</h2>
						<p className="color-font-gray-0015">
							Cell Collective is the powerful research-grade platform that powers
							ModelIt K12. Dive into interactive simulations, explore complex biological
							systems, and see what makes our approach to science education truly transformative.
						</p>
						<a
							href="https://cellcollective.org"
							target="_blank"
							rel="noopener noreferrer"
							className="cta-button color-bg-blue-0015"
						>
							Explore Cell Collective Now
							<i className="fas fa-arrow-right"></i>
						</a>
					</div>
					<div className="cta-badge">
						<div className="badge-content">
							<i className="fas fa-microscope"></i>
							<span>Research-Grade Platform</span>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* Vision Section */}
		<section className="landing-vision color-bg-blue-0050">
			<div className="container">
				<h2 className="section-title color-font-blue-0015">
					Transforming Science Education
				</h2>
				<div className="vision-content">
					<div className="vision-card">
						<div className="vision-icon color-bg-blue-0020">
							<i className="fas fa-lightbulb"></i>
						</div>
						<h3 className="color-font-blue-0015">From Curiosity to Discovery</h3>
						<p className="color-font-gray-0015">
							Computational modeling creates a bridge between student curiosity and
							scientific discovery. We believe every question deserves exploration,
							and every exploration should reveal the intricate beauty of living systems.
						</p>
					</div>
					<div className="vision-card">
						<div className="vision-icon color-bg-blue-0020">
							<i className="fas fa-user-graduate"></i>
						</div>
						<h3 className="color-font-blue-0015">Think Like a Scientist</h3>
						<p className="color-font-gray-0015">
							ModelIt K12 empowers students with agency to ask questions, test hypotheses,
							and draw conclusions. By putting powerful modeling tools in their hands,
							we help students develop the critical thinking skills that scientists use every day.
						</p>
					</div>
					<div className="vision-card">
						<div className="vision-icon color-bg-blue-0020">
							<i className="fas fa-project-diagram"></i>
						</div>
						<h3 className="color-font-blue-0015">Science in Action</h3>
						<p className="color-font-gray-0015">
							Transform abstract biological concepts into dynamic, interactive systems.
							Watch cells respond to stimuli, observe ecosystems adapt to change, and
							see the invisible processes that sustain life unfold before your eyes.
						</p>
					</div>
				</div>
			</div>
		</section>

		{/* Newsletter/Blog CTA */}
		<section className="landing-newsletter color-bg-blue-0015">
			<div className="container">
				<div className="newsletter-content">
					<div className="newsletter-icon animate-pulse-01">
						<i className="fas fa-envelope-open-text"></i>
					</div>
					<h2 className="color-font-blue-0050">Join Us on This Journey</h2>
					<p className="color-font-blue-0030">
						Be the first to know about ModelIt K12's progress, educational insights,
						and the latest in computational modeling for K-12 education. Subscribe to
						our newsletter for updates, teaching resources, and inspiring stories from
						the intersection of science and technology.
					</p>
					<a
						href="https://charlesmartinedd.github.io/modelitk12-newsletter/2025/11/01/welcome-to-modelit-k12.html"
						target="_blank"
						rel="noopener noreferrer"
						className="newsletter-button"
					>
						Subscribe to Our Newsletter
						<i className="fas fa-paper-plane"></i>
					</a>
				</div>
			</div>
		</section>
	</React.Fragment>
}
