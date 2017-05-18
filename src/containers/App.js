// import axios from 'axios'
import { connect } from 'react-redux';
import {
  updateWelcomePageCompletion, getWelcomePageCompletion
} from '../actions/userProfile';
import Welcome from '../components/Welcome';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    updateWelcomePageCompletion: (welcome_page_completion) => dispatch(updateWelcomePageCompletion(welcome_page_completion)),
    getWelcomePageCompletion: () => {
      dispatch(getWelcomePageCompletion()).then(res => {
      return res
      })
      .catch((error) => {
        console.log(error);
      })
    },
  };
}

const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);

export default WelcomeContainer;
