import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink
            exact
            key={movie.id}
            to={`/movies/${movie.id}`}
            activeClassName="saved-active"
          >
            <span key={movie.title} className="saved-movie">
              {movie.title}
            </span>
          </NavLink>
        ))}
        <NavLink exact to={`/`}>
          <div className="home-button">Home</div>
        </NavLink>
      </div>
    );
  }
}
