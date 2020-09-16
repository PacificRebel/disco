import React, { Component } from 'react'
import Colour from './Colour'
import "./App.css";

class Disco extends Component {
  constructor(props) {
    super(props)
    this.state = {currentColour: "black"}
  }

changeToRed = () => {
  this.setState({currentColour: "red"})
}

changeToBlue = () => {
  this.setState({currentColour: "blue"})
}

changeToYellow = () => {
  this.setState({currentColour: "yellow"})
}

  render() {
    return(
      <div className="change-colour">
        <button onClick={this.changeToRed}>Change to Red</button>
        <button onClick={this.changeToBlue}>Change to Blue</button>
        <button onClick={this.changeToYellow}>Change to Yellow</button>
          <Colour newColour={this.state.currentColour}/>
      </div>
    )
  }
}
export default Disco;
