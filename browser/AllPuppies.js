import React from 'react';

export default class AllPuppies extends React.Component {
  
  componentDidMount() {
    this.props.loadAllPuppies();
  }

  render() {
    const allPuppies = this.props.allPuppies

    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <ul className="list-unstyled">
            {
              allPuppies && allPuppies.map(puppy => {
                return <li key={ puppy.id }><a href="#">{ puppy.name }</a></li>
              })       
            }
          </ul>
        </div>
      </div>
  )}
}
