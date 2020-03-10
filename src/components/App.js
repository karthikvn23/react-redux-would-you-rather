import React, { Fragment } from 'react';
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux';
import Login from './Login'
import Home from './Home';

class App extends React.Component {
  componentDidMount(){
     this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props;
    return (
      <div>
        {
          authedUser === null ? 
                (<Login/>) :
                (
                  <Fragment>
                    <Home/>
                  </Fragment>
                )
        }
      </div>
    );
  }

}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App)
