import React, { Component } from 'react';

export default class SinglePuppy extends Component {

  render () {
    const { currentPuppy } = this.props;

    if (currentPuppy.name) {
      var pupper = new SpeechSynthesisUtterance(currentPuppy.name);
      window.speechSynthesis.speak(pupper);
    }
    
    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <h2>{currentPuppy.name}</h2>
          <div>
            <img src={currentPuppy.image} />
          </div>
        </div>
      </div>
    )
  }
}
