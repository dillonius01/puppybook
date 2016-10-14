import React from 'react';

export default class AllPuppies extends React.Component {

  render () {
    const { allPuppies } = this.props;

    return (
      <div className="container flexbox-container">
        <div className="jumbotron">
          <div>
            <ul className="list-unstyled">
              {allPuppies && allPuppies.map(puppy => (
                  <li key={puppy.id}><a href="#">{puppy.name}</a></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
