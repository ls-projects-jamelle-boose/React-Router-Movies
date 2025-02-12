// @flow
import React, { Component } from "react";
import { Route } from "react-router-dom";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    const findMovie = savedList.find(el => movie.id === el.id);
    if (findMovie) {
      alert(`Movie already saved!`);
    } else {
      return this.setState({
        savedList: [...savedList, movie]
      });
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />{" "}
        <Route exact path="/" component={MovieList} />
        <Route
          path="/movies/:id"
          render={props => <Movie {...props} save={this.addToSavedList} />}
        />
      </div>
    );
  }
}
