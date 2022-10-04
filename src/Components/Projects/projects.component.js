import React from 'react';
import './projects.styles.css';
import IMAGES from '../../images/images.js';

class Projects extends React.Component {
	render() {
		return(
			<section id='projects' className="s-works">
			   <div className="intro-wrap">
			      <div className="row section-header has-sep ">
			         <div className="col-four">
			            <h3 className="display-1">Recent Works.</h3>
			         </div>
			      </div>
			   </div>
			   <div className="row works-content">
			      <div className="col-full masonry-wrap">
			         <div className="masonry">
			         	<div className="masonry__brick">
			               <div className="item-folio">
			                  <div className="item-folio__thumb"> <a href="https://ufhe.herokuapp.com/" className="thumb-link" title="UFHE" data-size="1050x700" target="_blank"> <img src={ IMAGES.ufhe } alt=""/> </a></div>
			                  <div
			                     className="item-folio__text">
			                     <h3 className="item-folio__title"> UFHE</h3>
			                     <p className="item-folio__cat"> A NGO Website</p>
			                  </div>
			                  <a href="https://ufhe.herokuapp.com/" className="item-folio__project-link" title="Project link" target="_blank"> <i className="icon-link"></i> </a>
			               </div>
			            </div>
			            <div className="masonry__brick">
			               <div className="item-folio">
			                  <div className="item-folio__thumb"> <a href="https://www.44school.com/" className="thumb-link" title="4/4 School" data-size="1050x700" target="_blank"> <img src={ IMAGES.ffschool } alt=""/> </a></div>
			                  <div
			                     className="item-folio__text">
			                     <h3 className="item-folio__title"> 4/4 School of Music</h3>
			                     <p className="item-folio__cat"> A website for a music school</p>
			                  </div>
			                  <a href="https://www.44school.com/" className="item-folio__project-link" title="Project link" target="_blank"> <i className="icon-link"></i> </a>
			               </div>
			            </div>
			         </div>
			      </div>
			   </div>
			</section>
		);
	}
}

export default Projects;