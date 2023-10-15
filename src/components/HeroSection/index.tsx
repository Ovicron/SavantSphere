import React from 'react'
import './styles/index.css'

const HeroSection = () => {
	return (
		<section className="hero">
			<div className="hero-content">
				<h1>Turning Tech Challenges into Solutions</h1>
				<div className="meet-dev-section">
					<h3>Meet our developers</h3>
					<div className="image-links">
						<div className="image-link">
							<img src="https://i.imgur.com/ikqR1Pw.jpg" alt="Image 1" />
							<p>Samiul Azam Sami</p>
						</div>
						<div className="image-link">
							<img src="https://i.imgur.com/yeaTJPM.jpg" alt="Image 2" />
							<p>Andrew Gao</p>
						</div>
						<div className="image-link">
							<img src="https://i.imgur.com/4jfZ45r.jpg" alt="Image 3" />
							<p>Norik Zhagui</p>
						</div>
						<div className="image-link">
							<img src="https://i.imgur.com/nn88IGZ.jpg" alt="Image 4" />
							<p>Tasneem Hasanat</p>
						</div>
					</div>
					<p>
						We aim to match a customer looking <strong>solve complex problems</strong> with the developers who best meet their needs to{' '}
						<strong>build technical solutions.</strong>
					</p>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
