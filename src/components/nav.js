import React, { Component } from 'react';
import '../style/index.css';
import About from './about';
import Contact from './contact';
import Projects from './projects';
import img from './DorsetKareem.jpg';


const navbar = ["About Me", "Contact Me", "My Projects"]

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={ view: <About /> }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let view = <About />
    e.preventDefault();
    switch (e.target.id) {
      case "About Me":
        view = <About />
        break;

      case "Contact Me":
        view = <Contact />
        break;

      case "My Projects":
        view = <Projects />
        break;
    }

    this.setState({
      view
    })
    
  }

  render() {
  const list = navbar.map(link => (
      <li id={link} className="" key={link} onClick={this.handleClick}><button className="btn btn-block">{link}</button></li>
    )
  );  

    return (
      <div>
        <div className="nav">
          
          <img className="img" src={img} />
          <ul className="">
            {list}
          </ul>
        </div>
        <div className="section">
            {this.state.view}
        </div>
      </div>
      // <div className="">
      //   <nav className="navbar navbar-default">
      //     <span className="navbar-brand" href="#">Welcome</span>
      //   </nav>
            
      //   <div className="container">
      //     {this.state.view}
      //   </div>
      // </div>
    );
  }
}

export default App;
