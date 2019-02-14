// @flow
// Container for User Component
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Users from './users.component';
import * as userActions from './users.actions';


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isFetching,
    users: state.users.users,
    errorMessage: state.users.errorMessage,
  };
};

const enhance = compose(

  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Users);

// export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);