import React from 'react';
import './home.styles.css'
import Background from '../../images/hero-bg.jpg'

class Home extends React.Component {
	render() {
		return (
			<section id="home" className="s-home target-section" style={{ backgroundImage:`url(${Background})`,backgroundRepeat:"no-repeat", backgroundSize: 'cover' }}>
		        <div className="overlay"></div>
		        <div className="shadow-overlay"></div>
		        <div className="home-content">
		            <div className="row home-content__main">
		                <h3>WELCOME, MY NAME IS</h3>
		                <h1> <span className="green"> Shayan Bagchi. </span> <br/> I build things for the internet.</h1>
						<p>I am a Full-stack web developer with industry-level experience <br/> building websites and web applications. I specialize in JavaScript. <br/> I have experience in React, Redux, Node.js, and Firebase.</p>
		                <div className="home-content__buttons"> <a href="#contact" className="smoothscroll btn btn--stroke"> Start a Project </a></div>
		            </div>
		        </div>
		        <ul className="home-social">
		            <li> <a href="https://www.linkedin.com/in/shayan-bagchi-787a6715a/"><i className="fa fa-linkedin" aria-hidden="true"></i><span>Linkedin</span></a></li>
		            <li> <a href="https://github.com/shayanbagchi"><i className="fa fa-github" aria-hidden="true"></i><span>Github</span></a></li>
		            <li> <a href="https://www.facebook.com/shayan.bagchi/"><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a></li>
		            <li> <a href="https://www.instagram.com/shayan_bagchi/"><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a></li>
		        </ul>
		    </section>
		);
	}
}

export default Home;