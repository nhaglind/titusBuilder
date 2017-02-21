import React, { Component } from 'react';
import './Questions.css';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseName: 'The Titus Mansion',
      newBuild: true,
      sqft: 4500,
      rooms: 4
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const houseName = target.houseName;

    this.setState({
      [name]: value,
      [houseName]: value,
    });
  }

  render() {
    return (
      <div className="Questions">
      <form>
        <label>
          <p>House Name:
          <input
            name="houseName"
            type="string"
            value={this.state.houseName}
            onChange={this.handleInputChange} />
          </p>
        </label>
        <br />
        <label>
          <p>New Build:
          <input
            name="newBuild"
            type="checkbox"
            checked={this.state.newBuild}
            onChange={this.handleInputChange} />
          </p>
        </label>
        <br />
        <label>
          <p>Square Footage:
          <input
            name="sqft"
            type="number"
            value={this.state.sqft}
            onChange={this.handleInputChange} />
          </p>
        </label>
        <br />
        <label>
          <p>Rooms:
          <input
            name="rooms"
            type="number"
            value={this.state.rooms}
            onChange={this.handleInputChange} />
          </p>
        </label>
        <br />
      </form>
      </div>
    );
  }
}

export default Questions
