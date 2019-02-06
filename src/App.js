import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
	  super(props);
	  this.state ={
		  links:['Services', 'Portfolio', 'About', 'Team', 'Contact'],
		  mobileMenu:false
	  }
  }
  
  changeNav(){
	  
  }
  
  
  render() {
	const links = this.state.links.map((val, i) => {
		return <li key={i}>{val}</li>
	})
	var {mobileMenu} = this.state;
	  
    return (
		<div>
		  <div className="welcomeBlock">
			<nav>
			
				<h2>Start Bootstrap</h2>
				<ul>
					{links}
				</ul>
				
				<div>
					<p>Menu</p>
					<img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F588a64f5d06f6719692a2d13.png&f=1' alt='' 
					onClick={()=>{this.setState({mobileMenu:!mobileMenu})}}
					/>
				</div>
				
			</nav>
			
			{this.state.mobileMenu ? 
				(<ul className="mobileMenu animation"> {links} </ul>) : (<> </>)
			}
			<div className="welcomeContent">
				<h4>Welcome to our studio</h4>
				<h1>It's Nice To Meet You</h1>
				<a href="#">Tell Me More</a>
			</div>
		  </div>
		</div>
    );
	
  }
  
  
}

export default App;
