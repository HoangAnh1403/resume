import React, { Component } from 'react';

class Header extends Component {
	render() {
      return (
         <header id="home">
         <div className="row banner">
            <div className="twelve columns banner-text">
               <h1 className="responsive-headline">I am {this.props.name}.</h1>
               <h3>{this.props.description}
               </h3>
               <hr/>
            </div>
          </div>
      </header>
      );
   }
}


Header.defaultProps = {
	name: "Hoang Van Anh",
	description: "New member React JS"
}

export default Header;