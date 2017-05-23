// import axios from 'axios'
import { connect } from 'react-redux';
import axios from 'axios'
import { UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS } from '../constants/userProfile'
import {
  updateWelcomePageCompletion
} from '../actions/userProfile';
import Welcome from '../components/Welcome';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    updateWelcomePageCompletion: (welcome_page_completion) => dispatch(updateWelcomePageCompletion(welcome_page_completion)),
    getWelcomePageCompletion: () => {
    	axios.get('http://localhost:3004/demo_content')
    	.then(response => {
    	  dispatch({
    	    type: UPDATE_WELCOMEPAGE_COMPLETION_SUCCESS,
    	    payload: response.data
    	  });
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
