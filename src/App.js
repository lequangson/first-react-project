import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './_assets/styles/main.css';

class App extends Component {
  render() {
    const props = this.props
    return (
      <div className="container">
        {props.children}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.node.isRequired,
};
export default App;
