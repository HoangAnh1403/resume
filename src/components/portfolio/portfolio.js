import React, { Component } from 'react';

class Portfolio extends Component {
	constructor() {
	  	super();
		
	  	this.forceSendEmail = this.forceSendEmail.bind(this);
	};

	forceSendEmail() {
		this.forceUpdate()
	};
	render() {
      	return (
        	<portfolio id="portfolio">
		        <div className="row portfolio-content">
			        <div className="nine columns col-left">
			          <h2>Send email for me if you need contact.</h2>
			          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
			                ultricies nec, pellentesque eu, pretium quis, sem. </p>
			        </div>
			        <div className="three columns action col-right">
			          <button href="" className="button" onClick = {this.forceSendEmail}>Send email</button>
			        </div>
			    </div>
		    </portfolio>
	    );
   }
}

export default Portfolio;
