import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Search from '@material-ui/icons/Search';
import { searchLocation } from '../actions/allActions';

class SearchField extends Component {
  state = { location: ''};

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { setLocation, history } = this.props;
    const { location } = this.state;

    setLocation(location, () => history.push('/'));
  }

  render() {
    const { location } = this.state;
    return (
      <div className="searchTextbox">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={location}
            type="text"
            name="location"
            placeholder="Search food in your area . . ."
          />
          <i className="search-icon"><Search /></i>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  setLocation: searchLocation
})(withRouter(SearchField));
