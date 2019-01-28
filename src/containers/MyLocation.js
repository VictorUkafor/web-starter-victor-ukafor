import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Place from '@material-ui/icons/Place';
import { getMyLocation } from '../actions/allActions';

class MyLocation extends Component {
  onClick = () => {
    const { myLocation, history } = this.props;

    myLocation(() => history.push('/'));
  }

  render() {
    return (
      <div className="use-my-location">
        <button onClick={this.onClick} type="button">Use my location</button>
        <i className="my-location-icon"><Place /></i>
      </div>
    );
  }
}


const matchDispatchToProps = (dispatch) => bindActionCreators({
  myLocation: getMyLocation
}, dispatch);

export default connect(null, matchDispatchToProps)(withRouter(MyLocation));
