import React, { Component } from "react";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";

import axios from "axios";

export default class Movie extends Component {
  constructor(props) {
    console.log(`constructor`);
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    // change this line to grab the id passed on the URL
    console.log(`component did mount`);
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  componentDidUpdate(newProps) {
    console.log(`component did update - newProps`);
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  };

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="movie-list">
        <Link key={this.state.movie.id} to={`/movies/${this.state.movie.id}`}>
          <MovieCard key={this.state.movie.id} movie={this.state.movie} />
        </Link>
      </div>
    );
  }
}
