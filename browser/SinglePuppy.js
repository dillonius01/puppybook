import React, { Component } from 'react';

export default ({currentPuppy}) => (

  <div className="container flexbox-container">
    <div className="jumbotron">
      <h2>{ currentPuppy.name }</h2>
      <div>
        <img src={ currentPuppy.image } />
      </div>
    </div>
  </div> 

)

