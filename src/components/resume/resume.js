import React, { Component } from 'react';

class Resume extends Component {
	render() {
      	return (
	        <resume id="resume">
		        <div className="row education">
			        <div className="columns header-col">
			        </div>
			        <div className="columns main-col">
			          <div className="row item">
			            <div className="twelve columns">
			              <p className="info">Graphic Design <span>•</span> <em className="date">April 2010</em></p>
			              <p>
			                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
			                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
			                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
			                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
			              </p>
			            </div>
			          </div> {/* item end */}
			          <div className="row item">
			            <div className="twelve columns">
			              <p className="info">Front end Developer <span>•</span> <em className="date">March 2015</em></p>
			              <p>
			                Sed in purus at urna efficitur aliquet ut sed mi. Nullam quis tempor velit. Ut dignissim, erat vel luctus rutrum, mi mi efficitur sapien, vel 
			                blandit augue sem in augue. Vestibulum maximus malesuada nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
			                turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam vitae laoreet magna, et tincidunt nisl. Donec egestas efficitur 
			                libero eu aliquam. Nunc fermentum varius sapien quis molestie. Nullam sit amet ex ipsum.
			              </p>
			            </div>
			          </div> 
			        </div> 
			      </div>
		    </resume>
      	);
   }
}



export default Resume;