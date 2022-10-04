import React from 'react';
import './navbar.styles.css';
import Logo from '../../Logo.png'

class Navbar extends React.Component {

	constructor(props, context) {
	  super(props, context);
	 
	  this.state = {
	    visible: false,
	    isTop: true
	  };
	 
	  this.toggleMenu = this.toggleMenu.bind(this);
	}

	componentDidMount() {
		document.addEventListener('scroll', () => {
		  const isTop = window.scrollY < 900;
		  if (isTop !== this.state.isTop) {
		      this.setState({ isTop })
		  }
		});
	}

	toggleMenu() {
	  this.setState({
	      visible: !this.state.visible
	  });
	}

	render() {
		return (
			<header className={ this.state.visible ? "s-header  menu-is-open" : "s-header"}>
		        <div className="header-logo"> 
		        	<a className="site-logo" href="#home"> 
		        		<img src={Logo} alt="" style={{width:'80%'}}/> 
		        	</a>
		        </div>
		        <nav className="header-nav">
		        	<a href="#0" className="header-nav__close" title="close" onClick={this.toggleMenu}>
		        		<span>Close</span>
		        	</a>
		            <div className="header-nav__content">
		                <h3>Navigation</h3>
		                <ul className="header-nav__list">
		                    <li className="current"><a className="smoothscroll" href="#home" title="home">Home</a></li>
		                    <li><a className="smoothscroll" href="#about" title="about">About</a></li>
		                    <li><a className="smoothscroll" href="#services" title="services">Services</a></li>
		                    <li><a className="smoothscroll" href="#projects" title="projects">Projects</a></li>
		                    <li><a className="smoothscroll" href="#contact" title="contact">Contact</a></li>
		                </ul>
		                <p> Copy-and-Paste was programmed by <a href='#0' className="thumb-link" title="Programmer: A machine that turns coffee into code."> programmers </a> for programmers actually. </p>
		                <ul className="header-nav__social">
		                    <li> <a href="https://www.linkedin.com/in/shayan-bagchi-787a6715a/"><i className="fa fa-linkedin"></i></a></li>
		                    <li> <a href="https://github.com/shayanbagchi"><i className="fa fa-github"></i></a></li>
		                    <li> <a href="https://www.facebook.com/shayan.bagchi/"><i className="fa fa-facebook"></i></a></li>
		                    <li> <a href="https://www.instagram.com/shayan_bagchi/"><i className="fa fa-instagram"></i></a></li>
		                </ul>
		            </div>
	            </nav>
	            <a className={ this.state.isTop ? "header-menu-toggle" : "header-menu-toggle opaque"} onClick={this.toggleMenu} href="#0"> 
	            	<span className="header-menu-text">Menu</span> 
	            	<span className="header-menu-icon"></span> 
	            </a>
	        </header>
		);
	}
}

export default Navbar;