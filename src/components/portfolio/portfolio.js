import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Portfolio extends Component {
	constructor(props) {
         super(props);
         this.state = { text: '' };
    }
    componentWillMount() {
      console.log("componentWillMount da chay")
    }

    componentDidMount() {
        console.log("componentDidMount da chay")
    }

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
			          <button href=""  id="send-email" className="button" onClick={() =>  this.setState({text : 'ban da send mail'})}>Send email</button>
			          <p>{this.state.text}</p>
			        </div>
			    </div>
		    </portfolio>
	    );
   }
}

export default Portfolio;



// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

// class Portfolio extends Component {
// 	constructor() {
// 		super();
// 		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
// 	}

// 	findDomNodeHandler() {
// 		var name = document.getElementById('send-email');
// 		ReactDOM.findDOMNode(name).style.background = '#11ccB0';
// 		ReactDOM.findDOMNode(name).style.color = 'pink';
// 	}

// 	render() {
//       	return (
//         	<portfolio id="portfolio">
// 		        <div className="row portfolio-content">
// 			        <div className="nine columns col-left">
// 			          <h2>Send email for me if you need contact.</h2>
// 			          <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
// 			                ultricies nec, pellentesque eu, pretium quis, sem. </p>
// 			        </div>
// 			        <div className="three columns action col-right">
// 			          <button href=""  id="send-email" className="button" onClick = {this.findDomNodeHandler}>Send email</button>
// 			        </div>
// 			    </div>
// 		    </portfolio>
// 	    );
//    }
// }

// export default Portfolio;